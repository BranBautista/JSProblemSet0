

$(document).ready(function () {


    // if(window.location.hash !==''){
    //     var scrollPos = parseInt(window.location.hash.substring(1),10);
    //     $(window).scrollTo(scrollPos);
    // }

    const fragmentTextt11 = new DocumentFragment();
    const fragmentTextt12 = new DocumentFragment();
    const fragmentTextt13 = new DocumentFragment();
    const fragmentTextt2 = new DocumentFragment();

    var temp1 = $("#template1");
    var copy1 = temp1.contents().clone();
    $("#display1").append(copy1);

    var temp2 = $("#template2");
    var copy2 = temp2.contents().clone();
    $("#display2").append(copy2);

    $(".textt11").append('<h2 style="font-size:1.2rem;">Faculty members from groups</h2>');
    $.getJSON("scientist.json", function (json) {
        for (let i = 0; i < 30; i++) {
            fragmentTextt11.append(`First Name: ${json[i].firstName}, `);
            fragmentTextt11.append(`Last Name: ${json[i].lastName}. `);
            fragmentTextt11.append(` Subject: ${json[i].subject}. `);
        }
        console.log(fragmentTextt11)
        $(".textt11").append(fragmentTextt11);
    });

    $(".textt12").append('<h2 style="font-size:1.2rem;">Faculty members from groups</h2>');
    $.getJSON("scientist.json", function (json) {
        for (let i = 30; i < 60; i++) {
            fragmentTextt12.append(`First Name: ${json[i].firstName}, `);
            fragmentTextt12.append(`Last Name: ${json[i].lastName}. `);
            fragmentTextt12.append(` Subject: ${json[i].subject}. `);
        }
        $(".textt12").append(fragmentTextt12);
    });

    $(".textt13").append('<h2 style="font-size:1.2rem;">Faculty members from groups</h2>');
    $.getJSON("scientist.json", function (json) {
        for (let i = 60; i < 90; i++) {
            fragmentTextt13.append(`First Name: ${json[i].firstName}, `);
            fragmentTextt13.append(`Last Name: ${json[i].lastName}. `);
            fragmentTextt13.append(`Subject: ${json[i].subject}. `);
        }
        $(".textt13").append(fragmentTextt13);
    });

    $(".textt2").append('<h2 style="font-size:1.2rem;">Faculty members and subjects</h2>');
    $.getJSON("scientist.json", function (json) {
        for (let i = 0; i < json.length; i++) {
            fragmentTextt2.append(`${i+1}. First Name: ${json[i].firstName}, `);
            fragmentTextt2.append(`Last Name: ${json[i].lastName}. `);
            fragmentTextt2.append(`The subject: ${json[i].subject}. `);
        }
        $(".textt2").append(fragmentTextt2);
    });

});
