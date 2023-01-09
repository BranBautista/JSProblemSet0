async function requestData() {
    let url = './scientist.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getData() {
    let data = await requestData();
    localStorage.setItem('dataJSON', JSON.stringify(data));
    return JSON.parse(localStorage.getItem('dataJSON'));

}

async function workData(fragment) {
    dataJSON = await getData();
    createDisplayView1(dataJSON,fragment);
    display.appendChild(fragment);
    createLinks();
}

function createDisplayView1(data,fragment) {
    for (let i=0; i<3; i++){
        let container = document.createElement(`container${i+1}`);
            container.setAttribute("class", "containerImage");
        
        let linkImage = document.createElement("a");
            linkImage.setAttribute("id",`linkImage${i+1}`);
            linkImage.setAttribute("class","linkImage");
            linkImage.setAttribute("href",`#textView${i+2}`);
        let linkText = document.createElement("a");
            linkText.setAttribute("id",`linkText${i+1}`);
            linkText.setAttribute("class","linkText");
            linkText.setAttribute("href",`#textView${i+2}`);
        let textTemp = document.createElement("div");
            textTemp.setAttribute("id",`textTemp${i+1}`);
            textTemp.setAttribute("class","textTemp1");
        
        linkText.appendChild(textTemp);

        container.appendChild(linkImage);
        container.appendChild(linkText);

        renderView1(data,i,linkImage,textTemp);

        fragment.appendChild(container);
    }
}

function renderView1(data, index, imageContainer, textContainer){
    let img = `<img class="nebulat1" src='${data[index].image}'></img>`;
    let text = `First Name: ${data[index].firstName}
    <br>
    Last Name: ${data[index].lastName}
    <br>
    Subject: ${data[index].subject}
    <br>
    Biography: ${data[index].biography.substring(0,200)}
    `;

    imageContainer.insertAdjacentHTML("afterbegin",img);
    textContainer.insertAdjacentHTML("afterbegin",text);
}

function createDisplayViewOthers (data, index, fragment){
    let container = document.createElement("container");

    let textContainer = document.createElement("div");
        textContainer.setAttribute("id",`textView${index}`);
        textContainer.setAttribute("class","textViewOthers");

    let link = document.createElement("a");
        link.textContent = "Go back to screen 1";
        link.setAttribute("id", `linkView`); //HERE
        link.setAttribute("href", "#linkImage1");

    renderViewOthers(data, index, textContainer, container);
    container.appendChild(textContainer);
    container.appendChild(link);

    fragment.appendChild(container);
}

function renderViewOthers (data, index, textContainer, divContainer){
    let img = `<img class="nebulat2" src='${data[index-2].image}'></img>`;
    let text = `First Name: ${data[index-2].firstName}
    <br>
    Last Name: ${data[index-2].lastName}
    <br>
    Subject: ${data[index-2].subject}
    <br>
    Biography: ${data[index-2].biography}
    <br>
    <br>
    `;

    divContainer.insertAdjacentHTML("afterbegin",img);
    textContainer.insertAdjacentHTML("afterbegin",text);
}

function createOthers(index,fragment) {
    createDisplayViewOthers(dataJSON, index, fragment);
    display.appendChild(fragment);
    localStorage.setItem('view', JSON.stringify(index));

    linkView.addEventListener("click", () => {
        display.innerHTML="";
        create();
    })
}

function create() {
    createDisplayView1(dataJSON, fragment1);
    display.appendChild(fragment1);
    localStorage.setItem('view', JSON.stringify(1));
    createLinks();
}

function createLinks() {
    linkImage1.addEventListener("click", () => {
        display.innerHTML="";
        createOthers(2, fragment2);
    })
    
    linkText1.addEventListener("click", () => {
        display.innerHTML="";
        createOthers(2, fragment2);
    })

    linkImage2.addEventListener("click", () => {
        display.innerHTML="";
        createOthers(3, fragment3);
    })
    
    linkText2.addEventListener("click", () => {
        display.innerHTML="";
        createOthers(3, fragment3);
    })

    linkImage3.addEventListener("click", () => {
        display.innerHTML="";
        createOthers(4, fragment4);
    })
    
    linkText3.addEventListener("click", () => {
        display.innerHTML="";
        createOthers(4, fragment4);
    })
}


let display = document.getElementById("display");

let dataJSON = JSON.parse(localStorage.getItem('dataJSON'));

const fragment1 = document.createDocumentFragment();
const fragment2 = document.createDocumentFragment();
const fragment3 = document.createDocumentFragment();
const fragment4 = document.createDocumentFragment();

if (dataJSON === null){
    localStorage.setItem('view', JSON.stringify(1));
    workData(fragment1);

} else if (localStorage.getItem('view') === '1') {
    create();
}
else if (localStorage.getItem('view') === '2') {
    createOthers(2, fragment2);
}
else if (localStorage.getItem('view') === '3') {
    createOthers(3, fragment3);
}
else if (localStorage.getItem('view') === '4') {
    createOthers(4, fragment4);
}