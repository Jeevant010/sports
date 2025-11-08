// const MakeMePromise = require("./MakeMePromise");

// const callback = function (resolve, reject){
//     const car = "BMW";
//     resolve(car);
// }

// const somePromise = new Promise(callback);

// somePromise.then((promiseResult) => {
//     console.log(promiseResult);
// })

// console.log(somePromise);

// const otherPromise = new Promise((resolve, reject) => {
//     const hello = "world";
//     resolve(hello);
// });

// console.log(otherPromise);


// const newPromise = new Promise((resolve, reject) => {
//     const car = {
//         make : "ford",
//         model : "Mustang", 
//         year : 1968
//     }
//     setTimeout(() =>{
//         resolve(car);
//         // reject(car); // give me error
//     }, 3000);
// });

// newPromise.then( promiseResult => console.log(promiseResult))
// .catch((e) => console.log("something went wrong ", e));

const response = fetch('https://jsonplaceholder.typicode.com/todos');

// response.then( (dataStream) => {
//     console.log(dataStream)
//     const jsondata = dataStream.json();
//     jsondata.then(jsondata => console.log(jsondata));
// })

// response.then( (dataStream) => dataStream.json())
// .then(jsondata => console.log(jsondata))
// .catch(e => console.log(e));

const taskTime = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({
            message : "Task Completed",
        })
    }, 2000)
});

console.log(taskTime);

const hello = "hello";
console.log(hello);

taskTime.then(data => console.log(data));

const timeer = new Promise( (resolve, reject) => {
    resolve ( {
        name : "john",
        age : 30,
    })
})

timeer.then(data => console.log(data))

console.log(1);
for(let i=0; i<1000; i++){
    console.log(1);
}

// Promise have higher prioirity then webapis

