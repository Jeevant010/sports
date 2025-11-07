const { JSDOM } = require("jsdom");
const { window } = new JSDOM(`<!DOCTYPE html><p>Hello</p>`);

// console.log(window.localStorage.setItem('Model', 'AMG One'));

console.log("deepesh");

const greet = (name = "Hello") => console.log(`Hello ${name}`)

setTimeout(greet, 3999);

// settimout goes to the last of the task queue

setTimeout(()=>{
console. log('last');
}, 10);

for(let i =0;i<10000; i++){
console. log("loop");
}

for(let i =0;i<10000;i++){
console. log("loop")
}

for(let i =0;i<10000;i++){
console. log("loop")
}
for(let i =0;i<10000;i++){
console. log("loop")
}

console. log(2);