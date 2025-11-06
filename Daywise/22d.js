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

class Car {
    constructor(model, make){
        console.log(this);
        this.make = make;
        this.model = model; 
    }
}

console.log(window.innerHeight)
console.log(window.innerWidth)
// window.alert("this is a alert!")
// const name  = window.prompt("What's your name ?")

// const car = {
//     make : "mercedes-benz",
//     model : "GLE-3",
//     move:function(){
//         console.log(this)
        
//     }
// }

// car.move()

const car1 = new Car("BMW", "A5");
console.log(car1);
// console.log(car1.model)
// console.log(car1.make)

 const car2 = new Car("BMW", "A7");

 console.log(car2)


 /**
  * 
  * 
  class Car {
    constructor(make, model){
        
    this.make = make
    this.mode = model
    }
    constructor(model, make){
        console.log(this);
        this.make = make;
        this.model = model; 
    }
}


  * WE can't overload a constructor
  */


// function greet(){
//     console.log("this is a great function")
// }

const greet = function(){
    console.log("This is a unnamed function")
}

const greet1 = () =>{
    console.log(this)

}

greet()
/***
 * 
 * This will return the window object on calling
 
const helo = funciton(){
    return this
}

 * 
 */
const car = new Car();
console.log(car);

const ar = ["a", "b" ,"c", "d", "e", "f"]
const ar2 = ar;
ar2.pop()
console.log(ar)

const ar3 = ar.map(e => e)
 const ar4 = ar.map(function(e){
    return e
 })
 console.log(ar3,ar4)

 const newRa = []
 const ra = [ 1, 2, 3, 4, 5, 6 ,3 ,5 ,6 ,34 , 5 ]
 ra.forEach(function(e){
    if(e%2 === 0) newRa.push(e)
 })

console.log(ra)
console.log(newRa)

const fil = ra.filter(function(items){
    return items % 2 === 1
})

const newarr = ra.filter((items)=> items%2 ===0)
console.log(`new : arr  ${newarr}`)

console.log(fil)

