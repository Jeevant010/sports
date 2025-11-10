const button = document.querySelector("button")


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



const handleMove = (e) => {
    console.log({
        X : event.clientX,
        Y : event.clientY
    }, 
    e);
}

// document.addEventListener("mousedown", handleMove);
document.addEventListener("mousemove", handleMove);
