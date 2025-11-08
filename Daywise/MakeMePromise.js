// Promise constructor
const MakeMePromise = () => new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve({
        car : "BMW",
        color : "red",
        year : '2018',
    })
  }, 700);
});

module.exports = MakeMePromise;
