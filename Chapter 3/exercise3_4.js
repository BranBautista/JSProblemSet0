let sizeX = 40;
let sizeY = 40;

let data = new Array(sizeX*sizeY);

function dataFulfilled (array){
    for (let i = 0; i < array.length; i++){
        if(i < array.length/4){
            array[i] = 'yellow';
        }
        else if (i < array.length/2){
            array[i] = 'green';
        }
        else if (i < (3*array.length)/4){
            array[i] = 'blue';
        }
        else {
            array[i] = 'red';
        }
    }
    return array;
}

dataFulfilled(data);

//This is going to be our creator function:
function Image(data, sizeX, sizeY, name) {
        this.data = data;
        this.width = sizeX;
        this.heigth = sizeY;
        this.name = name;
}

Image.prototype.getPixel = function (positionX, positionY) {
    //Here I prevent offsize pixels and negative values  
    if ((positionX <= this.width && positionX > 0) && (positionY <= this.heigth && positionY > 0)) {
        //I supposed that 40 items in the array form a raw of pixels of the 2d image
        //so every 40 itmes change to a lower raw, and so on
        let positionArray = (positionY-1)*this.width + positionX;
        return this.data[positionArray-1]
    } else {
        throw Error ('This pixel is not part of the image');
    }
}

let img = new Image(data, sizeX, sizeY, 'myImage');

//console.log(img.data);
console.log(img.width);
console.log(img.heigth);
console.log(img.name);
console.log(img.getPixel(18, 4));