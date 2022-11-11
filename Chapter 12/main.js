let attrs  = document.getElementsByTagName('div')[0].attributes;

Array.from(attrs).forEach(({ name, value }) => {
    console.log(`${value}`);
})
