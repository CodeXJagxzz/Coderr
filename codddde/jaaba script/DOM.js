// PRACTICE SET 1

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "From Apna College Students";
console.dir(h2.innerText);

// PRACTICE SET 2

let divs = document.querySelectorAll(".box");

let count=1;
for(i of divs) {
    i.innerText=`New unique value is ${count}`;
    count++;
}

console.log(divs);

// PRACTICE SET 3

let newBtn = document.createElement("button");
newBtn.innerText= "Click Me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

// PRACTICE SET 4  [generating random colors]

console.log("Script.js initializing")

let boxes = document.querySelector(".container").children;
 
function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 =  Math.ceil(0 + Math.random()*255);
    let val3 =  Math.ceil(0 + Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach(e=> {
     e.style.backgroundColor = getRandomColor()
     e.style.color = getRandomColor();
 })



