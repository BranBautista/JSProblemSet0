(function(){
    let template1 = document.getElementById("template1")
    let template2 = document.getElementById("template2")

    let display1 = document.getElementById("display1")
    let display2 = document.getElementById("display2")

    let paragraph = document.createElement("div");


    fetch("./scientist.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        let output1 = "";
        let output2 = "";
        let i = 1;
        for(let scientist of data){
            output1 += `
                <div id="image">
                    <a href="#display2"><img class="nebulat1" src='${scientist.image}'></a>
                    <a href="#display2" class="linkText"><div class="textt1${i}">
                        First Name: ${scientist.firstName}
                        <br>
                        Last Name: ${scientist.lastName}
                        <br>
                        Subject: ${scientist.subject}
                        <br>
                        Biography: ${scientist.biography}
                    </div></a>
                </div>
            `;
            i += 1; 
        }

        output2 += `
            <div>
                <img class="nebulat2" src='${data[0].image}' alt="nebula">
                <div class="textt2">
                    First Name: ${data[0].firstName}
                    <br>
                    Last Name: ${data[0].lastName}
                    <br>
                    Subject: ${data[0].subject}
                    <br>
                    Biography: ${data[0].biography}
                </div>
                <br>
                <br>
                <a id="linkt2" href="#display1">Go to template 1</a>
            </div>
            `;

        template1.innerHTML = output1;
        template2.innerHTML = output2;

        let cloneTemplate1 = template1.content.cloneNode(true);
        let cloneTemplate2 = template2.content.cloneNode(true);

        display1.appendChild(cloneTemplate1);
        display2.appendChild(cloneTemplate2);
    })

}())
