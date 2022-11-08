let mapHolidaysUS = new Map()
let mapHolidaysNL = new Map()

mapHolidaysNL.set('01/01','Nieuwjaarsdag');
mapHolidaysNL.set('27/04','Koningsdag');
mapHolidaysNL.set('05/05','Bevrijdingsdag');
mapHolidaysNL.set('26/05','Hemelvaartsdag');
mapHolidaysNL.set('25/12','Eerste en tweede kerstdag');

mapHolidaysUS.set('01/01','New Year´s Day');
mapHolidaysUS.set('04/01','April Fools´ Day');
mapHolidaysUS.set('06/19','Juneteenth National Independence Day');
mapHolidaysUS.set('07/04','Independence Day');
mapHolidaysUS.set('11/11','Veterans´ Day');
mapHolidaysUS.set('12/25','Christmas Day');

function styleDateFormat(date) {
    let day, month, year
    let regexDate = /([a-zA-Z]*)(\W)([a-zA-Z]*)*(\W){2}([0-3][0-9])\/([0-3][0-9])\/(\d{4})$/;
    let arrayDate = regexDate.exec(date);
    if(arrayDate[1] == 'English'){
        day = arrayDate[6];
        month = arrayDate[5];
        year = arrayDate[7];
        if(mapHolidaysNL.get(`${day}/${month}`) != 'undefined'){
            return `Dutch-NL: ${day}/${month}/${year} (${mapHolidaysNL.get(`${day}/${month}`)})`
        }
        else{
            return `Dutch-NL: ${day}/${month}/${year}`;
        }
    }
    else{
        day = arrayDate[5];
        month = arrayDate[6];
        year = arrayDate[7];
        if(mapHolidaysUS.get(`${month}/${day}`) !== 'undefined'){
            return `English-US: ${month}/${day}/${year} (${mapHolidaysUS.get(`${month}/${day}`)})`
        }
        else{
            return `English-US: ${month}/${day}/${year}`;
        }
    }
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