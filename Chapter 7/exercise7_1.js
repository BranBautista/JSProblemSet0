function convHexToRGB(num) {
    const numString = num.slice(1);
    let arrayRGB=[];
    let regexHexNum = /#[a-fA-F0-9]{6}/;
    if (regexHexNum.test(num)){
        for (let i = 2; i <= numString.length; i = i+2){
            subString = numString.substring(i-2,i);
            for(let j=0; j<subString.length; j++){
                if (j%2 == 0){
                    firstNumber = parseInt(subString[j], 16)*16;
                }
                else {
                    secondNumber = parseInt(subString[j],16);
                }
            }
            arrayRGB.push(firstNumber + secondNumber); 
        }
        return `rgb (${arrayRGB[0]}, ${arrayRGB[1]}, ${arrayRGB[2]})`;
    }
}

console.log(convHexToRGB('#3020ff'));
