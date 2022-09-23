function convHexToRGB(num) {
    const numString = num.slice(1);
    let arrayNumberOdd=[];
    let arrayNumberEven=[];
    let arrayRGB=[];
    for (let i = 2; i <= numString.length; i = i+2){
        subString = numString.substring(i-2,i); //Here it is defining the tupla
        for(let j=0; j<subString.length; j++){ //Here it is running over the digits of the dupla
            let numberOdd;
            let numberEven;
            if (j%2==0){ //If the index of the digit is odd, then do this
                if (!isNaN(subString[j])){ //If there is no a letter, then do this
                    let number = Number(subString[j]);
                    numberOdd = number*16;
                }
                else{ //If there is a letter, then do this
                    if (subString[j].toUpperCase()=='A'){
                        number = 10;
                        numberOdd = number*16;
                    } else if (subString[j].toUpperCase()=='B'){
                        number = 11;
                        numberOdd = number*16;
                    } else if (subString[j].toUpperCase()=='C'){
                        number = 12;
                        numberOdd = number*16;
                    } else if (subString[j].toUpperCase()=='D'){
                        number = 13;
                        numberOdd = number*16;
                    } else if (subString[j].toUpperCase()=='E'){
                        number = 14;
                        numberOdd = number*16;
                    } else if (subString[j].toUpperCase()=='F'){
                        number = 15;
                        numberOdd = number*16;
                    }
                }
            }
            else { //If the index of the digit is even, then do this 
                if(!isNaN(subString[j])){ //If there is no a letter, then do this
                    numberEven = Number(subString[j]);
                }
                else{ //If there is a letter, then do this
                    if (subString[j].toUpperCase()=='A'){
                        numberEven = 10;
                    } else if (subString[j].toUpperCase()=='B'){
                        numberEven = 11;
                    } else if (subString[j].toUpperCase()=='C'){
                        numberEven = 12;
                    } else if (subString[j].toUpperCase()=='D'){
                        numberEven = 13;
                    } else if (subString[j].toUpperCase()=='E'){
                        numberEven = 14;
                    } else if (subString[j].toUpperCase()=='F'){
                        numberEven = 15;
                    }
                }
            }

            //Here I create an array with the odd numbers and with the even numbers
            if ((typeof numberOdd) === 'number'){
                arrayNumberOdd.push(numberOdd);
            }
            if ((typeof numberEven) === 'number'){
                arrayNumberEven.push(numberEven);
            }
        }
    }

    // Here I sum the odd and even numbers. 
    for (let i=0; i < arrayNumberOdd.length; i++){
        let sum = arrayNumberOdd[i] + arrayNumberEven[i];
        arrayRGB.push(sum); 
    }

    let RGB = `rgb (${arrayRGB[0]}, ${arrayRGB[1]}, ${arrayRGB[2]})`;
    return RGB; 
}

console.log(convHexToRGB('#0161bd'));
console.log(convHexToRGB('#3020ff'));

//** ------ Problem 02 ------- **

let tablesHolidaysNL = {
    holidays: ['Nieuwjaarsdag', 'Koningsdag', 'Bevrijdingsdag', 'Hemelvaartsdag', 'Eerste en tweede kerstdag'],
    days: ['01/01', '27/04', '05/05', '26/05', '25/12']
}

let tablesHolidaysUS = {
    holidays: ['New Year´s Day', 'April Fools´ Day','Juneteenth National Independence Day', 'Independence Day', 'Veterans´ Day', 'Christmas Day'],
    days: ['01/01', '04/01', '06/19', '07/04', '11/11', '12/25']
}

const sizeHolidaysNL = tablesHolidaysNL.days.length;
const sizeHolidaysUS = tablesHolidaysUS.days.length;

function styleDateFormat(date) {
    const sizeDate = date.length;
    let dateNL;
    if (date[0] == 'E') {
        let monthNumber = date.slice(sizeDate - 10, sizeDate - 8);
        let dayNumber = date.slice(sizeDate - 7, sizeDate - 5);
        let yearNumber = date.slice(sizeDate - 4, sizeDate);
        for (let i = 0; i < sizeHolidaysNL; i++) {
            if (tablesHolidaysNL.days[i] === `${dayNumber}/${monthNumber}`) {
                dateNL = `Dutch-NL: ${dayNumber}/${monthNumber}/${yearNumber} (${tablesHolidaysNL.holidays[i]})`;
                break
            }
            else {
                dateNL = `Dutch-NL: ${dayNumber}/${monthNumber}/${yearNumber}`;
            }
        }
    }
    else {
        let dayNumber = date.slice(sizeDate - 10, sizeDate - 8);
        let monthNumber = date.slice(sizeDate - 7, sizeDate - 5);
        let yearNumber = date.slice(sizeDate - 4, sizeDate);
        for (let i = 0; i < sizeHolidaysUS; i++) {
            if (tablesHolidaysUS.days[i] === `${monthNumber}/${dayNumber}`) {
                dateNL = `English-US: ${monthNumber}/${dayNumber}/${yearNumber} (${tablesHolidaysUS.holidays[i]})`;
                break
            }
            else {
                dateNL = `English-US: ${monthNumber}/${dayNumber}/${yearNumber}`;
            }
        }
    }
    return dateNL;
}

console.log(styleDateFormat('English-US: 01/01/2014'));
console.log(styleDateFormat('English-US: 04/27/2014'));
console.log(styleDateFormat('English-US: 05/05/2014'));
console.log(styleDateFormat('English-US: 05/26/2014'));
console.log(styleDateFormat('English-US: 12/25/2014'));

console.log(styleDateFormat('Dutch-NL: 01/01/2014'));
console.log(styleDateFormat('Dutch-NL: 01/04/2014'));
console.log(styleDateFormat('Dutch-NL: 19/06/2014'));
console.log(styleDateFormat('Dutch-NL: 04/07/2014'));
console.log(styleDateFormat('Dutch-NL: 11/11/2014'));
console.log(styleDateFormat('Dutch-NL: 25/12/2014'));