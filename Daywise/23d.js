// function greet(Name = 'hello'){
//     console.log('hi ' + Name)
// }

// greet()

// greet('name')

// const greet = (Name = 'hello') => {
//     console.log('hi ' + Name);
// }

const add = (a, b) => a+b;
console.log(add(5 , 6));

const add1 = function (a, b) {
    return a + b;
}
// console.log(add1([5 , 6], [4, 6]));


const arr = [1, 2, 3, 4, 5];

const a2 = arr.map(i => i);
console.log(a2);


const Car =  {
    make : "Mercedes-Benz",
    model : "W13",
    year : 2323,
    engine : "lenovo",
    doors : 2,
    left : "hello",

    move : function() {
        console.log(this)
    },
    move2 : function() {
        console.log(this)
    }
}

/**
 * 
 * Array function cannot be a factory function as we can declare 
 * 
 * const Car = () => {
 * make = "Name",
 * model = "F34",
 * move : function(){
 *  console.log(this)
 * }
 * }
 */

// Car.move()
// Car.move2()

// console.log(Car)

/**Destructing */

// const a = ["a" , "b" , "c"];
// const a1 = a[0];
// const a21 = a[1];
// const a3 = a[2];

// const [ b1, b2, b3 ] = a;
// const [ aa, bb , cc, dd] = a;
// console.log(b1, b2, b3);

// console.log(aa, bb, cc, dd);


const {make, year, engine} = Car;

console.log(make, year, engine);

const newObj = {
    make:Car.make,
    model : Car.model,
    engine: Car.engine,
}

console.log(newObj)

let { doors : hello} = Car;
console.log(hello)

const car = {
    brand : "Ford",
    engine : {
        capacity : "5.8L",
        type : "V7",
        fuel : '(petrol)'
    }
}

const {engine:{capacity}} = car
console.log(capacity)

console.log(engine)

