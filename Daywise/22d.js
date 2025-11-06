const { JSDOM } = require("jsdom");
const { window } = new JSDOM(`<!DOCTYPE html><p>Hello</p>`);

console.log(window.document.querySelector("p").textContent); // "Hello"


// const a = {
//     brand : "Mercedes-Benz",
//     model : "C-Class",
//     year : 2022,
//     color : "Black"
// }

// const obj = {
//     name : "John Doe",
//     age : 30,
//     occupation : "Engineer"
// }
// console.log(obj)

// class Car {
//     constructor(model, make){
//         this.make = make;
//         this.model = model; 
//     }
// }

console.log(window.innerHeight)
console.log(window.innerWidth)
// window.alert("this is a alert!")
// const name  = window.prompt("What's your name ?")

const car = {
    make : "mercedes-benz",
    model : "GLE-3",
    move:function(){
        console.log(this)
        
    }
}

car.move()

