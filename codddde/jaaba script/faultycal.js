let random = Math.random();
console.log(random);
let a = prompt("Enter the first number");
let b = prompt("operation");
let c = prompt("Enter the second number");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}



if (random > 0.1) {
    console.log(`The result is ${a} ${b} ${c} `)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}


else {
    b = obj[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}