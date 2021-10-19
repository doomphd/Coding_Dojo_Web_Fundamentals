console.log("page loaded...");

var countElement = document.querySelector("#name")
var countElement1 = document.querySelector(".card-list-item");
var countElement2 = document.querySelector(".card-list-item2");

function change(){
    countElement.innerText = "John Do";
}
function remove(element){
    element.remove();
    countElement1.remove();
}
function remove2(element){
    element.remove();
    countElement2.remove();
}