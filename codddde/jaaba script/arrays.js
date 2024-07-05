//Simple array

//FOR LOOP

let heros = ["ironman","spiderman","shaktiman","hulk"];

for(let i=0; i<heros.length;i++) {
    console.log(heros[i])
}

//For of loop

let city = ["ironman","spiderman","shaktiman","hulk"];

for(let val of city) {
    console.log(val)
}

//PRACTICE Q1

let marks = [97,86,77,55,43];

let sum=0;

for(let add of marks){
    sum += add
}
let avg= sum/marks.length

console.log(sum)
console.log(`AVERAGE of marks = ${avg}`)

//PRACTICE Q2 [discount of 10%]

let items = [250,645,300,900,50];
let i=0;

for(let cal of items){
    console.log(`original price of items = ${cal}`);
    let offer = cal / 10;
    items[i]= items[i] - offer
    console.log(`discounted value of iems = ${items[i]}`);
    i++
}

// METHODS OF ARRAYS

let place = ["kallu","mallu","lallu","thallu"];
console.log(place);

console.log(place.toString());

let now=marks.concat(items);
console.log(now);

place.unshift("pallu");
console.log(place);

// PRACTICE Q3

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

console.log(companies);

companies.shift();

companies.splice(1,1,"OLA");

companies.push("Amazon");

console.log(companies);