const MakeMeAPromise = require("./MakeMeAPromise.js");

// const data = {
//   car: "BMW",
//   color: "red",
//   year: "2012",
//   price: "$10000"
// };

// console.log(MakeMeAPromise(data));
// console.log(MakeMeAPromise(data), 'reject');

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.error('Error fetching data:', error));

const response = fetch('https://jsonplaceholder.typicode.com/todos');
console.log(response);

// setTimeout(() =>{
//   console.log(response);
// },7000);

