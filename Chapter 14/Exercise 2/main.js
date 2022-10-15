let btn = document.getElementById("btncolumns");
let columns = document.getElementById("columns");
let wrapper = document.getElementById("wrapper");

let paragraph = document.createElement("div");
let text = document.createTextNode("The red knot (Calidris canutus), or simply known as the knot in English-speaking Europe, is a medium-sized shorebird that breeds in tundra and the Arctic Cordillera in the far north of Canada, Europe, and Russia. It is a large sandpiper in the genus Calidris, second only to the great knot. Six subspecies are recognised. Its diet varies according to season; arthropods and larvae are the preferred food items at the breeding grounds, while various hard-shelled molluscs are consumed at other feeding sites at other times. North American breeders migrate to coastal areas in Europe and South America, while the Eurasian populations winter in Africa, Papua New Guinea, Australia, and New Zealand. The species forms enormous flocks when not breeding. This red knot was photographed in Boat Harbour in New South Wales, Australia.");
paragraph.appendChild(text)
wrapper.appendChild(paragraph)

function change(){
    let valueCol = columns.options[columns.selectedIndex].value;

    wrapper.removeChild(paragraph);

    paragraph = document.createElement("div");
    text = document.createTextNode("The red knot (Calidris canutus), or simply known as the knot in English-speaking Europe, is a medium-sized shorebird that breeds in tundra and the Arctic Cordillera in the far north of Canada, Europe, and Russia. It is a large sandpiper in the genus Calidris, second only to the great knot. Six subspecies are recognised. Its diet varies according to season; arthropods and larvae are the preferred food items at the breeding grounds, while various hard-shelled molluscs are consumed at other feeding sites at other times. North American breeders migrate to coastal areas in Europe and South America, while the Eurasian populations winter in Africa, Papua New Guinea, Australia, and New Zealand. The species forms enormous flocks when not breeding. This red knot was photographed in Boat Harbour in New South Wales, Australia.");
    paragraph.appendChild(text);
    wrapper.appendChild(paragraph);

    console.log(valueCol)
    paragraph.style.columnCount = valueCol;
}
