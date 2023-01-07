let attrs  = document.getElementsByTagName('div')[0].attributes;

Array.from(attrs).forEach(({value}) => {
    console.log(value);
})
