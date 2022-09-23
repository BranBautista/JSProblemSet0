var elem  = document.getElementsByTagName('div')[0],
    attrs = elem.attributes;

Array.from(attrs).forEach(({ name, value }) => {
    console.log(`${value}`);
})
