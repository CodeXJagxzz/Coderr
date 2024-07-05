// FOR LOOP

for(let i=1; i<=10; i++) {
    console.log("LOOPSS")
}
   
console.log("loop has ended")

//  WHILE LOOP

let j=1;
while(j <= 5) {
    console.log("j =", j)
    j++
}

console.log('LOOP HAS ENDED')

// DO-WHILE LOOP 

let k=2;
do {
    console.log("bro")
    k++
} while (k <=5);

// PRACTICE QS

// let num = 25;
// let usernum= prompt ("ENTER A NUMER : ");

// if (num != usernum) {
//     usernum=prompt("YOU ARE WRONG");
// } else {
//     console.log("CONGO BROO")
// }
    
// FOR-OF LOOPS

let str = "JAVASCRIPT";
let size = 0;

for (let l of str) {
    console.log("l =",l);
    size++;
}

console.log("size =",size)

// FOR-IN LOOPS

let student ={
    name : "jagrat",
    age : 15,
    isPass : true
}

for (let key in student) {
    console.log("key =",key, "value =",student[key])
}

// PRACTICE SET
    
let fullName = prompt("ENTER YOUR FULL NAME");
let username ='@' + fullName + fullName.length;
console.log(username)

// there are some string meathods like replace , charAt etc...

//FOREACH LOOP

let num = [1,22,14,56,114]

