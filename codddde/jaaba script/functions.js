// FUNCTION FOR CALCULATING AVG

const avg = (x,y) => {
    s = (x + y)/2
    return s;
}

avg(3,5);

// FOR COUNTING VOWLES

const countVow = (str) =>{

let count = 0;

for (const key of str) {
if (key === "a" || key === "e" || key === "i" || key === "o" || key === "u") {
    count ++
  }
 }
 return count;
}

countVow("aeiouxzu");

//MAPS

 let arr = [1, 2, 4, 6, 3];
 let a= arr.map((val,idx,arrr) =>{
     console.log(val,idx,arrr);
     return val/idx
 })

    console.log(a);
   
//FILTER
let arr2 = [10, 20, 4, 6, 31];
let a2 = arr2.filter((h)=>{
    return h<=10
})

console.log(a2);

//REDUCE
let arr3 = [10, 2, 4, 6, 5];
// let a3= arr3.reduce((h1,h2)=>{
// return h1+h2
// })

// console.log(a3);                        both methods r correct

const reduce_func = (h1,h2) =>{
    return h1 + h2;
}

let a3=arr3.reduce(reduce_func);
console.log(a3);

// bussiness name creating 

let rand = Math.random();
let first ,second ,third;

if(rand < 0.33){
    first = "AMAZING";
}

else if(rand >=0.33 && rand <0.66) {
    first = "DOCTOR";
}

else {
    first = "CAPTAIN";
}

rand = Math.random();

if(rand < 0.33){
    second = "HULK";
}

else if(rand >=0.33 && rand <0.66) {
   second = "SPIDERMAN";
}

else {
    second = "TONY";
}

rand = Math.random();

if(rand < 0.33){
    third = "CIVILWAR";
}

else if(rand >=0.33 && rand <0.66) {
    third = "HOMECOMING";
}

else {
    third = "STRANGE";
}

console.log(`${first} ${second} ${third}`);

