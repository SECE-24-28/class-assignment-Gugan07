// getelementbyId
// getelementbyClassName
// getelementByTagName
// querySelector
// querySelectorAll

let head = document.getElementById("head");

head.innerText = "welcome Back";
//head.innerHTML = "<h1>Hello</h1>";

head.style.color ="red";
head.style.fontsize = "42px";

let furits = document.getElementsByClassName("fruit");

//console.log(fruits);

fruits[0].style.color = "green";
fruits[1].style.color = "yellow";

let ele = document.querySelector("div");
console.log(ele);

let ele1 = document.querySelectorAll("div");

