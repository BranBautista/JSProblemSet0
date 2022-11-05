//I have a building with:

const floors = 8;
const rooms = 5;
const equipmentNum = 9;

const memoObj = {};

//Each room in every floor has associated an equipment. 

let arrayEquipment = [ [ 'e2', 'e6', 'e5', 'e8', 'e9' ],
  [ 'e2', 'e5', 'e7', 'e3', 'e5' ],
  [ 'e7', 'e7', 'e7', 'e5', 'e4' ],
  [ 'e7', 'e3', 'e8', 'e1', 'e2' ],
  [ 'e1', 'e4', 'e3', 'e6', 'e2' ],
  [ 'e3', 'e2', 'e5', 'e4', 'e8' ],
  [ 'e4', 'e9', 'e4', 'e3', 'e6' ],
  [ 'e3', 'e2', 'e1', 'e7', 'e6' ] ];

  //Each room in every floor has associated a person and some has associated an equipment. 

let arrayPersons =  [[ 'Eva', 'Ana e6', 'Nora', 'Gabriela', 'Alberto' ],
[ 'Samuel', 'Gabriela', 'Alejandro', 'Álvaro', 'Manuel' ],
[ 'Samuel', 'Alejandro', 'Ulisas', 'Marta', 'Ulisas' ],
[ 'Juan', 'Sara', 'Alberto', 'Juan', 'Ulisas' ],
[ 'Lucas e1', 'Carlos', 'Gabriela', 'Nora', 'Ulisas' ],
[ 'Andrés e3', 'Alba', 'Raquel', 'Gabriela', 'Gabriela' ],
[ 'Eva', 'Mariana', 'Alba', 'Ana', 'Ulisas' ],
[ 'Álvaro', 'Manuel', 'Alba', 'Álvaro', 'Juan' ]] ;

function algorithmSearh(nameSearch){

    //memoization
    if(memoObj[nameSearch]!== undefined){
        return memoObj[nameSearch];
    }

    let equipmentNumber = nameSearch[nameSearch.length-1];
    let helpStringP, helpStringE, helpIndex;
    let numberOfItems=0;
    let arrayLocations=[];

    if (nameSearch[0] === 'e'){
        memoObj[nameSearch] = [];
        for (let i = 0; i < floors; i++){
            for(let j = 0; j < rooms; j++){
                helpStringP = arrayPersons[i][j];
                helpStringE = arrayEquipment[i][j];
                helpIndex = helpStringP.indexOf(' ');
                if (helpIndex !== -1){
                    if (helpStringP[helpStringP.length-1]== equipmentNumber){
                        numberOfItems = numberOfItems + 1;
                        arrayLocations.push([i+1, j+1]);
                        memoObj[nameSearch].push([i+1, j+1]);
                    }
                }
                else{
                    if (helpStringE[helpStringE.length-1]== equipmentNumber){
                        numberOfItems = numberOfItems + 1;
                        arrayLocations.push([i+1, j+1]);
                        memoObj[nameSearch].push([i+1, j+1]);
                    }
                }
            }
        }
    }
    else{
        memoObj[nameSearch] = [];
        for (let i = 0; i < floors; i++){
            for(let j = 0; j < rooms; j++){
                if (arrayPersons[i][j] == nameSearch){
                    numberOfItems = numberOfItems + 1;
                    arrayLocations.push([i+1, j+1]);
                    memoObj[nameSearch].push([i+1, j+1]);
                }
            }
        }
    }
    return arrayLocations
}



console.log(algorithmSearh('e1'));
console.log(algorithmSearh('e1'));

console.log(algorithmSearh('Nora'));
console.log(algorithmSearh('Nora'));
