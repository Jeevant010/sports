// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res) => {
//     res.json()
//     .then(data =>{
//         data.map( todo =>{
//             console.log(todo.title);
//         } )
//     })
// })

// const dosomething = async () => {
//     fetch("https://jsonplaceholder.typicode.com/todos").then(() => {
//         console.log(4);
//     })
     
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos")
//     console.log(res);
//     console.log(3);
//     for ( let i = 0; i<1000; i++){
//         console.log("hi");
//     }
// }

// dosomething();
// console.log(2);

// const getData = ( async () => {
//     try {
//         const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
//         console.log(response);
//     }
//     catch(e) {
//         console.log("error occured", e);
//     }
// });

// // getData();
// const interval = setInterval(getData, 2000);


const lat = document.querySelector('#lat');
const long = document.querySelector('#long');
const alt = document.querySelector('#alt');
const vel = document.querySelector('#vel');

const getSData = ( async () =>{
    try{
        const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
        const { longitude, latitude, altitude, velocity } = await response.json();
        console.log(longitude, latitude, altitude, velocity);
        lat.innerHTML = latitude.toFixed(5);
        long.innerHTML = longitude.toFixed(5);
        alt.innerHTML = altitude.toFixed(5);
        vel.innerHTML = velocity.toFixed(5);

        console.log(response);
    }
    catch(e) {
        console.log("Error " ,e);
    }
})

const interval = setInterval(getSData, 2000);
navigator.geolocation.getCurrentPosition((pos)=>{
    console.log(pos);
});

