// DOM Now we are manupulating DOM
console.log("i am wiriting")

for(let i=0; i<100; i++){
    console.log("Written");
}

console.log(document)
const ele = document.getElementById("root");
console.log(ele);

ele.innerHTML("hello");