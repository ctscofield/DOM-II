// Your code goes here
const title = document.querySelector(".logo-heading");
const navi = document.querySelectorAll(".nav a")[3];
const navi1 = document.querySelectorAll(".nav a")[2];
const navi2 = document.querySelectorAll(".nav a")[1];
const bus = document.querySelector(".intro img");
const new1 = document.createElement("TEXTAREA");
const divCon = document.querySelector("div .destination");
const newNode = document.createTextNode("SELECT THIS TEXT");

const par = document.querySelectorAll("p");
const h2 = document.querySelectorAll("h2");
const midSection = document.querySelector(".content-section");
const midP = midSection.querySelectorAll("div.text-content > p");
const midImg = midSection.querySelectorAll("div.img-content > img");
const contDest = document.querySelector(".content-destination");
const boatPic = contDest.querySelector("img");
const boatPar = contDest.querySelector("p");

//1
title.addEventListener("click", function(event){ alert("mouse click");
event.stopPropagation();
});
//2
navi.addEventListener("mouseover", function(){ alert("mouseover event also press 'z'");
});
//3
document.addEventListener("keydown", myFunction)
function myFunction(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 90) {
        alert("Z keydown");
    }   
}
//4
bus.addEventListener("load", function() { alert("load event");
});
//5
navi1.addEventListener("focus", function() {
    navi1.style.backgroundColor = "orange";
});
//6
window.addEventListener("resize", function () {
    alert("window resized");
});
//7
document.addEventListener("scroll", function() {
    alert("scroller beware");
});
//8
title.appendChild(new1);
new1.appendChild(newNode);

new1.addEventListener("select", function() {
    alert("selected text");
});
//9
navi2.addEventListener("dblclick", function() {
    alert("double click event");
});
//10
new1.addEventListener("wheel", function() {
    this.style.fontSize = "30px";
});