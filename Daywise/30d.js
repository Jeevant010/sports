// const button = document.querySelector("button");



// const handleClick = (e) => {
//     console.log(e.target);
//     window.alert("You clicked");
// }

// const handledbClick = (e) => {
//     console.log("doubleClick");
// }

// button.addEventListener('click', handleClick);
// button.addEventListener('dblclick', handledbClick)

// const handleKeyDown = (e) => {
//     console.log(e.key);
//     if(e.key === 'Enter') window.alert("Wrong button");
// }

// document.addEventListener('keydown', handleKeyDown);



// const handleMove = (e) => {
//   console.log({
//     X: e.clientX,
//     Y: e.clientY
//   });

//   const dot = document.createElement('div');
//   dot.style = `
//     position: absolute;
//     width: 5px;
//     height: 5px;
//     background-color: dodgerblue;
//     top: ${e.clientY}px;
//     left: ${e.clientX}px;
//     border-radius: 50%;
//   `;
  
//   document.body.appendChild(dot);
// };


// document.addEventListener("mousedown", handleMove);
// document.addEventListener("mousemove", handleMove);


const computer = document.querySelector("#comp");
const me = document.querySelector("#you");
const message = document.querySelector("#message ");


let us = 0, cs = 0;

const options = {
    0:'rock',
    1 : 'paper',
    2 : 'scissors'
}

const computerRespond = () => {
    const random = Math.floor(Math.random()*3);
    // switch(random){
    //     case 0 : 
    //     return 'rock';
    //     case 1:
    //         return 'paper';
    //     case 2:
    //         return 'scissors'
    // }
    return random;
}

const tie = () => {
    console.log("It is a Tie.");
    message.innerHTML = "It is a Tie."
}

const usewin = () => {
    message.innerHTML = "user win"
    me.innerHTML = ++cs;
}

const compwin = () => {
    message.innerHTML = "computer win"
    computer.innerHTML = ++us;
}

const game = ( action ) =>{
    // console.log(computerRespond())
    // console.log(action);

    // const userRes = Object.values(options);
    // console.log(userRes);

    const compu = computerRespond();
    const userop = action;
    console.log(compu, userop);
    switch(action){
        case 0:
            switch(compu){
                case 0:
                    tie();
                    break;
                case 1:
                    compwin();
                    break;
                case 2 :
                    usewin();
                    break;
            }
        break;
        case 1:
            switch(compu){
                case 0:
                    usewin();
                    break;
                case 1:
                    tie();
                    break;
                case 2 :
                    compwin();
                    break;
            }
        break;
        case 2:
            switch(compu){
                case 0:
                    compwin();
                    break;
                case 1:
                    usewin();
                    break;
                case 2 :
                    tie();
                    break;
            }
        break;
    }
}