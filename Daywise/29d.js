// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res) => {
//     res.json()
//     .then(data =>{
//         data.map( todo =>{
//             console.log(todo.title);
//         } )
//     })
// })

const dosomething = async () => {
    fetch("https://jsonplaceholder.typicode.com/todos").then(() => {
        console.log(4);
    })
     
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    console.log(res);
    console.log(3);
    for ( let i = 0; i<1000; i++){
        console.log("hi");
    }
}

dosomething();
console.log(2);