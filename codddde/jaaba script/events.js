let modebtn = document.querySelector("#mode");
let currmode = "light";

modebtn.addEventListener("click" , () =>{
   if(currmode === "light"){
    currmode = "dark";
    document.querySelector("body").style.backgroundColor = "black" ;
    document.querySelector("p").style.color = "white" ;
   } else {
    currmode = "light";
    document.querySelector("body").style.backgroundColor = "white" ;
    document.querySelector("p").style.color = "black" ;
   }

   console.log(currmode);
})

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 =  Math.ceil(0 + Math.random()*255);
    let val3 =  Math.ceil(0 + Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}

    document.querySelector(".container").addEventListener("click", () =>{
        document.querySelector(".container").style.backgroundColor = "red";
})

document.querySelector(".childcontainer").addEventListener("click", () =>{
    
})

document.querySelector(".child").addEventListener("click", () =>{
  
})

setInterval(() => {
    document.querySelector(".container").style.backgroundColor = getRandomColor();
    document.querySelector(".childcontainer").style.backgroundColor = getRandomColor();
    document.querySelector(".child").style.backgroundColor = getRandomColor();
}, 150);