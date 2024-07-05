//callback

// function sum(a,b){
//     console.log(a-b);
// }

// function calculator(a,b,aluCallback){
//     aluCallback(a,b);
// }

//  calculator(1,2,sum);

 //settimeout callback

//  function getData(dataId, getNextData){
//   setTimeout(() =>{

//     console.log("data", dataId);    
//     if(getNextData){
//         getNextData();
//       }
//     },1000);
//   }
 
//callback hell

//  getData(1,() =>{
//     console.log("data 2 is loading..")
//     getData(2,() =>{
//         console.log("data 3 is loading..")
//         getData(3)
//     })
//  })


 //PROMISEs

 //creating a promise

//  let promise = new Promise((resolve,reject)=>{
//     console.log("Iam a promise");
//     reject("network error");
//     resolve("succesfull");
//  })

//using a promise with a callback and timeout

//  function getId (Id,getNextId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Id = ",Id); 
//             resolve("succesfull");
//             if(getNextId){
//                 getNextId();
//             }
//         }, 5000);
//     })
//  }

//using .then and .catch

// const getPromise = () =>{
//  return new Promise ((resolve,reject) =>{
//     console.log("I am a promise");
//       resolve("SUCCESFULL");
//     //reject("REJECTED");
//  });
// }

// let promise = getPromise();

// promise.then((res) => {
//     console.log("promise is",res)
// })

// promise.catch((err) => {
//     console.log("promise is",err)
// })

//PROMISE CHAINING

// function getId (Id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Id = ",Id); 
//             resolve("succesfull");
//         }, 3000);
//     })
//  };

//  console.log("getting data 1...");

//  getId(1).then((res)=>{
//     console.log("getting data 2...");
//     return getId(2);
//  }).then((res)=>{
//     console.log("getting data 3...");
//     return getId(3);
//  }).then((res)=>{
//     console.log(res)
//  });

 // easy way to write promise

//  console.log("I am a promise");

//  let prom1 = new Promise((resolve,reject)=>{
//     let a = Math.random();
//     if( a < 0.5){
//         reject("No you are unlucky");
//     }else{
      
//         setTimeout(() => {
//             resolve("you are lucky");
//         }, 2000);
//     }
//  })

//  prom1.then((res)=>{
//     console.log(res);
//  }).catch((err)=>{
//      console.log(err)
//  });

 //async - await

function api () {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200);     //200 is the code for success or resolve
        }, 1000);
    });
};

let p1 = async function getWeatherData() {
    await api();
    await api();
    await api();
}

//async - await one example

 function getId (Id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Id = ",Id); 
            resolve("succesfull");
        }, 3000);
    })
 };

 async function getAllData() {
    console.log("getting ID 1...")
    await getId(1);
    console.log("getting ID 2...")
    await getId(2);
    console.log("getting ID 3...")
    await getId(3);
 };




