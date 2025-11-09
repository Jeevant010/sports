// DOM Now we are manupulating DOM
// console.log("i am wiriting")

// for(let i=0; i<100; i++){
//     console.log("Written");
// // }

// // console.log(document)
// //Creates a render tree which tell us this dom str
// const ele = document.getElementById("root");
// // console.log(ele);
// // console.log(typeof(ele));

// // ele.innerHTML = "hello";
// // ele.innerHTML = "Thing";

// const lel = document.getElementById("list");
// // console.log(lel);

// // const ol = document.querySelector("ul.list");
// const oli = document.querySelector("li");
// // const ola = document.querySelectorAll("ul.list");
// console.log(oli);
// // console.log(ola)

// const s = document.querySelector("ul:nth-child(2)")
// console.log(s);

// const id = document.querySelector("#root");
// id.innerHTML = " hello , "
//     // color:cyan;
// id.style =`
//     color:dodgerblue;
//     font-size:50px;
//     font-family:Metropolis
// `
// console.log(id);

// console.log(id.classList)
// id.classList.add("new-cars")
// id.classList.add("something")
// id.classList.remove("new-cars");
// console.log(id.classList)

// We can add this add and remove methods on dom node not on any of these array like querySelectorAll

const ar = [ "eat food" , "go for a walk", "Workout", "sleep"]
// ar.map(todo => {
//     const add = document.createElement('li')
//     add.innerHTML = todo
//     console.log(add)
//     id.appendChild(add)
// })
const list = document.querySelector('ul');
fetch('https://jsonplaceholder.typicode.com/todos')
.then(r => r.json())
.then(todos => {
    todos.map(todo=>{
        console.log(todo)
        const add = document.createElement('li');
        add.innerHTML = todo.title;
        list.append(add);

    })
})

// ar.map(todo => {
//     const add = document.createElement('li')
//     // add.innerHTML = todo
//     // const text = document.createTextNode(todo)
//     // // console.log(add)
//     // console.log(text)
//     // // id.appendChild(add)
//     // add.appendChild(text)
//     // id.appendChild(add)

//     add.innerHTML = `<h1>${todo}</h1>`;
// })

// const timer = setInterval(() => {
//     console.log("hi")
// },1000)

// setTimeout(() => {
//     clearInterval(timer);
// }, 10000)


// clock
const timer = document.querySelector("#timer");
const secondHand = document.querySelector('div.second');
let time = 0;
const t = setInterval(() => {
    // console.log("hi")
    time++;
    secondHand.style = `transform:rotate(${time*6}deg)`;
    timer.innerHTML = time;
}, 1000);
