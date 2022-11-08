(function () {
    let template1 = document.getElementById("template1")
    let template2 = document.getElementById("template2")

    cloneTemplate1 = template1.content.cloneNode(true);
    cloneTemplate2 = template2.content.cloneNode(true);

    let display1 = document.getElementById("display1")
    let display2 = document.getElementById("display2")

    let div1Temp1 = cloneTemplate1.getElementById("div1Temp1")
    let linkImage1 = cloneTemplate1.getElementById("linkImage1")
    let linkText1 = cloneTemplate1.getElementById("linkText1")
    let textTemp1 = cloneTemplate1.getElementById("textTemp1")

    let div2Temp1 = cloneTemplate1.getElementById("div2Temp1")
    let linkImage2 = cloneTemplate1.getElementById("linkImage2")
    let linkText2 = cloneTemplate1.getElementById("linkText2")
    let textTemp2 = cloneTemplate1.getElementById("textTemp2")

    let div3Temp1 = cloneTemplate1.getElementById("div3Temp1")
    let linkImage3 = cloneTemplate1.getElementById("linkImage3")
    let linkText3 = cloneTemplate1.getElementById("linkText3")
    let textTemp3 = cloneTemplate1.getElementById("textTemp3")

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

            let img12 = `<img class="nebulat2" src='${data[0].image}'></img>`;
            let text12 = `First Name: ${data[0].firstName}
            <br>
            Last Name: ${data[0].lastName}
            <br>
            Subject: ${data[0].subject}
            <br>
            Biography: ${data[0].biography}
            `;

            let img22 = `<img class="nebulat2" src='${data[1].image}'></img>`;
            let text22 = `First Name: ${data[1].firstName}
            <br>
            Last Name: ${data[1].lastName}
            <br>
            Subject: ${data[1].subject}
            <br>
            Biography: ${data[1].biography}
            `;

            let img32 = `<img class="nebulat2" src='${data[2].image}'></img>`;
            let text32 = `First Name: ${data[2].firstName}
            <br>
            Last Name: ${data[2].lastName}
            <br>
            Subject: ${data[2].subject}
            <br>
            Biography: ${data[2].biography}
            `;

            div1Temp2.insertAdjacentHTML("afterbegin",img12);
            text1t2.insertAdjacentHTML("afterbegin",text12);

            div2Temp2.insertAdjacentHTML("afterbegin",img22);
            text2t2.insertAdjacentHTML("afterbegin",text22);

            div3Temp2.insertAdjacentHTML("afterbegin",img32);
            text3t2.insertAdjacentHTML("afterbegin",text32);
    
            display2.appendChild(cloneTemplate2);
        })

}())