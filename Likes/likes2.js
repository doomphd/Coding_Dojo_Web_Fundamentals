var neilCount = 9;
var nicholeCount = 12;
var jimCount = 9;
var countElement1 = document.querySelector("#count1");
var countElement2 = document.querySelector("#count2");
var countElement3 = document.querySelector("#count3");


function addNeil(){
    neilCount++;
    countElement1.innerText = neilCount + " likes(s)"
}

function addNichole(){
    nicholeCount++;
    countElement2.innerText = nicholeCount + " likes(s)"
}
function addJim(){
    jimCount++;
    countElement3.innerText = jimCount + " likes(s)"
}