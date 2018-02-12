const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

function printQuestion(question, answer) {
    const h3 = document.createElement("h3");
    h3.textContent = question;
    const p = document.createElement("p");
    p.textContent = JSON.stringify(answer);
    document.body.appendChild(h3);
    document.body.appendChild(p);
}


let newElement = document.createElement("div")
newElement.textContent = JSON.stringify(gotCitiesCSV.split(","))
let destination= document.body;
destination.appendChild(newElement);

//instead of destination.appendChild Edwin would: document.body.appendChild.

let newElement2 = document.createElement("div");
newElement2.textContent = JSON.stringify(bestThing);
destination.appendChild(newElement2);

let newElement3 = document.createElement("div");
newElement3.textContent = JSON.stringify(gotCitiesCSV.split(",").join("; "));
destination.appendChild(newElement3);

let newElement4 = document.createElement("div");
let newLotrArray = lotrCitiesArray.join("; ");
newElement4 = document.write(newLotrArray.toString());
destination.appendChild(newElement4);

let newElement5 = document.createElement("div");
newElement5.textContent = lotrCitiesArray.slice(0, 5);
destination.appendChild(newElement5);

