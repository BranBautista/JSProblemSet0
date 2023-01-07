(function () {

    // document.location.reload(true)

    let display1 = document.getElementById("display1")
    let display2 = document.getElementById("display2")

    let template1 = document.getElementById("template1")
    let template2 = document.getElementById("template2")

    cloneTemplate1 = template1.content.cloneNode(true);
    cloneTemplate2 = template2.content.cloneNode(true);

    let div1Temp1 = cloneTemplate1.getElementById("div1Temp1");

    let linkImage1 = document.createElement("a");
    linkImage1.setAttribute("id","linkImage1");
    linkImage1.setAttribute("class","linkImage");
    linkImage1.setAttribute("href","#text1Temp2");
    let linkText1 = document.createElement("a");
    linkText1.setAttribute("id","linkText1");
    linkText1.setAttribute("class","linkText");
    linkText1.setAttribute("href","#text1Temp2");
    let textTemp1 = document.createElement("div");
    textTemp1.setAttribute("id","textTemp1");
    textTemp1.setAttribute("class","textTemp1");
    linkText1.appendChild(textTemp1);


    let div2Temp1 = cloneTemplate1.getElementById("div2Temp1");

    let linkImage2 = document.createElement("a");
    linkImage2.setAttribute("id","linkImage2");
    linkImage2.setAttribute("class","linkImage");
    linkImage2.setAttribute("href","#text2Temp2");
    let linkText2 = document.createElement("a");
    linkText2.setAttribute("id","linkText2");
    linkText2.setAttribute("class","linkText");
    linkText2.setAttribute("href","#text2Temp2");
    let textTemp2 = document.createElement("div");
    textTemp2.setAttribute("id","textTemp2");
    textTemp2.setAttribute("class","textTemp1");
    linkText2.appendChild(textTemp2);


    let div3Temp1 = cloneTemplate1.getElementById("div3Temp1");

    let linkImage3 = document.createElement("a");
    linkImage3.setAttribute("id","linkImage3");
    linkImage3.setAttribute("class","linkImage");
    linkImage3.setAttribute("href","#text3Temp2");
    let linkText3 = document.createElement("a");
    linkText3.setAttribute("id","linkText3");
    linkText3.setAttribute("class","linkText");
    linkText3.setAttribute("href","#text3Temp2");
    let textTemp3 = document.createElement("div");
    textTemp3.setAttribute("id","textTemp3");
    textTemp3.setAttribute("class","textTemp1");
    linkText3.appendChild(textTemp3);


    div1Temp1.appendChild(linkImage1);
    div1Temp1.appendChild(linkText1);

    div2Temp1.appendChild(linkImage2);
    div2Temp1.appendChild(linkText2);
 
    div3Temp1.appendChild(linkImage3);
    div3Temp1.appendChild(linkText3);

    // let linkt2 = cloneTemplate2.getElementsByClass("linkt2");
    let link1 = cloneTemplate2.getElementById("link1");
    let link2 = cloneTemplate2.getElementById("link2");
    let link3 = cloneTemplate2.getElementById("link3");

    let div1Temp2 = cloneTemplate2.getElementById("div1Temp2");
    let text1t2 = cloneTemplate2.getElementById("text1Temp2");

    let div2Temp2 = cloneTemplate2.getElementById("div2Temp2");
    let text2t2 = cloneTemplate2.getElementById("text2Temp2");
    
    let div3Temp2 = cloneTemplate2.getElementById("div3Temp2");
    let text3t2 = cloneTemplate2.getElementById("text3Temp2");

    fetch("./scientist.json")
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {

            let img1 = `<img class="nebulat1" src='${data[0].image}'></img>`;
            let text1 = `First Name: ${data[0].firstName}
            <br>
            Last Name: ${data[0].lastName}
            <br>
            Subject: ${data[0].subject}
            <br>
            Biography: ${data[0].biography.substring(0,200)}
            `;

            let img2 = `<img class="nebulat1" src='${data[1].image}'></img>`;
            let text2 = `First Name: ${data[1].firstName}
            <br>
            Last Name: ${data[1].lastName}
            <br>
            Subject: ${data[1].subject}
            <br>
            Biography: ${data[1].biography.substring(0,200)}
            `;

            let img3 = `<img class="nebulat1" src='${data[2].image}'></img>`;
            let text3 = `First Name: ${data[2].firstName}
            <br>
            Last Name: ${data[2].lastName}
            <br>
            Subject: ${data[2].subject}
            <br>
            Biography: ${data[2].biography.substring(0,200)}
            `;

            linkImage1.insertAdjacentHTML("afterbegin",img1);
            textTemp1.insertAdjacentHTML("afterbegin",text1);

            linkImage2.insertAdjacentHTML("afterbegin",img2);
            textTemp2.insertAdjacentHTML("afterbegin",text2);

            linkImage3.insertAdjacentHTML("afterbegin",img3);
            textTemp3.insertAdjacentHTML("afterbegin",text3);


            div1Temp1.appendChild(linkImage1);
            div1Temp1.appendChild(linkText1);

            div2Temp1.appendChild(linkImage2);
            div2Temp1.appendChild(linkText2);

            div3Temp1.appendChild(linkImage3);
            div3Temp1.appendChild(linkText3);
            
    
            display1.appendChild(cloneTemplate1);

            // let img12 = `<img class="nebulat2" src='${data[0].image}'></img>`;
            // let text12 = `First Name: ${data[0].firstName}
            // <br>
            // Last Name: ${data[0].lastName}
            // <br>
            // Subject: ${data[0].subject}
            // <br>
            // Biography: ${data[0].biography}
            // `;

            // let img22 = `<img class="nebulat2" src='${data[1].image}'></img>`;
            // let text22 = `First Name: ${data[1].firstName}
            // <br>
            // Last Name: ${data[1].lastName}
            // <br>
            // Subject: ${data[1].subject}
            // <br>
            // Biography: ${data[1].biography}
            // `;

            // let img32 = `<img class="nebulat2" src='${data[2].image}'></img>`;
            // let text32 = `First Name: ${data[2].firstName}
            // <br>
            // Last Name: ${data[2].lastName}
            // <br>
            // Subject: ${data[2].subject}
            // <br>
            // Biography: ${data[2].biography}
            // `;

            // div1Temp2.insertAdjacentHTML("afterbegin",img12);
            // text1t2.insertAdjacentHTML("afterbegin",text12);

            // div2Temp2.insertAdjacentHTML("afterbegin",img22);
            // text2t2.insertAdjacentHTML("afterbegin",text22);

            // div3Temp2.insertAdjacentHTML("afterbegin",img32);
            // text3t2.insertAdjacentHTML("afterbegin",text32);
            localStorage.setItem('display1', display1);
            localStorage.setItem('display2', display2);
        })


        linkImage1.addEventListener("click", () => {
            fetch("./scientist.json")
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                let img12 = `<img class="nebulat2" src='${data[0].image}'></img>`;
                let text12 = `First Name: ${data[0].firstName}
                <br>
                Last Name: ${data[0].lastName}
                <br>
                Subject: ${data[0].subject}
                <br>
                Biography: ${data[0].biography}
                `;
                div1Temp2.insertAdjacentHTML("afterbegin",img12);
                text1t2.insertAdjacentHTML("afterbegin",text12);
            })    
            display2.appendChild(cloneTemplate2);
            display1.style.display = "none";

            localStorage.setItem('display1', display1);
            localStorage.setItem('display2', display2);
            display1 = localStorage.getItem('display1') 
            display2 = localStorage.getItem('display2') 
        })
        
        linkText1.addEventListener("click", () => {
            display2.style.display = "inherit"
            display1.style.display = "none"
        })

        linkImage2.addEventListener("click", () => {
            display2.style.display = "inherit"
            display1.style.display = "none"
        })

        linkText2.addEventListener("click", () => {
            display2.style.display = "inherit"
            display1.style.display = "none"
        })

        linkImage3.addEventListener("click", () => {
            display2.style.display = "inherit"
            display1.style.display = "none"
        })

        linkText3.addEventListener("click", () => {
            display2.style.display = "inherit"
            display1.style.display = "none"
        })


        link1.addEventListener("click", () => {
            display1.style.display = "inherit"
            display2.innerHTML = "";
        })

        link2.addEventListener("click", () => {
            display1.style.display = "inherit"
            display2.style.display = "none"
        })

        link3.addEventListener("click", () => {
            display1.style.display = "inherit"
            display2.style.display = "none"
        })


}())
