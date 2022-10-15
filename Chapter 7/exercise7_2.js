let tablesHolidaysNL = {
    holidays: ['Nieuwjaarsdag', 'Koningsdag', 'Bevrijdingsdag', 'Hemelvaartsdag', 'Eerste en tweede kerstdag'],
    days: ['01/01', '27/04', '05/05', '26/05', '25/12']
}

let tablesHolidaysUS = {
    holidays: ['New Year´s Day', 'April Fools´ Day', 'Juneteenth National Independence Day', 'Independence Day', 'Veterans´ Day', 'Christmas Day'],
    days: ['01/01', '04/01', '06/19', '07/04', '11/11', '12/25']
}

const sizeHolidaysNL = tablesHolidaysNL.days.length;
const sizeHolidaysUS = tablesHolidaysUS.days.length;

function styleDateFormat(date) {
    let day, month, year;
    let regexDay, regexMonth, regexYear;

    let regexUS = /English/;
    if (regexUS.test(date)) {
        regexMonth = /[0-1][0-9]/;
        regexDay = /(?<=\/)[0-3][0-9]/;
        regexYear = /(?<=\/)[0-9]{4}/;
        month = date.match(regexMonth)[0];
        day = date.match(regexDay)[0];
        year = date.match(regexYear)[0];
        for (let i = 0; i < sizeHolidaysNL; i++) {
            console.log(i)
            console.log(`${day}/${month}`)
            if (tablesHolidaysNL.days[i] === `${day}/${month}`) {
                return `Dutch-NL: ${day}/${month}/${year} (${tablesHolidaysNL.holidays[i]})`;
            }
        }
        return `Dutch-NL: ${day}/${month}/${year}`;
    }
    else {
        regexMonth = /(?<=\/)[0-1][0-9]/;
        regexDay = /[0-3][0-9]/;
        regexYear = /(?<=\/)[0-9]{4}/;
        month = date.match(regexMonth)[0];
        day = date.match(regexDay)[0];
        year = date.match(regexYear)[0];
        for (let i = 0; i < sizeHolidaysUS; i++) {
            if (tablesHolidaysUS.days[i] === `${month}/${day}`) {
                return `English-US: ${month}/${day}/${year} (${tablesHolidaysUS.holidays[i]})`;
            }
        }
        return `English-US: ${month}/${day}/${year}`;
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
