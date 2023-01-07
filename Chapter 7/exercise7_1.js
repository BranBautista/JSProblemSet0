function hexToRgb(num) {
    let regexHexNum = /^#([a-fA-F\d]{2})([a-fA-F\d]{2})([a-fA-F\d]{2})$/;
    let result = regexHexNum.exec(num);
    if (result !== null){
        let rgb1 = parseInt(result[1], 16),
        rgb2 = parseInt(result[2], 16),
        rgb3 = parseInt(result[3], 16);
        return `rgb (${rgb1}, ${rgb2}, ${rgb3})`;
    }
    else {
        return 'Null'
    }
}
  
console.log(hexToRgb("#3020ff"));