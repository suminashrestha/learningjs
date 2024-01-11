// events: keydown,keyup
//           document.addEventListener(event,callback);

// const myBox = document.getElementById("myBox");
// document.addEventListener("keydown",event=>{
//    myBox.textContent =":)";
//    myBox.style.backgroundColor = "red";
// });
// document.addEventListener("keyup",event=>{
//     myBox.textContent ="Box";
//     myBox.style.backgroundColor = "aqua";
// });

//moving a div using arrow keys

const myBox = document.getElementById("myBox");
const moveAmount = 30;
let x=0;
let y=0;
document.addEventListener("keydown",event=>{
       myBox.textContent ="Box is moving";
        myBox.style.backgroundColor = "yellow";
     });
     document.addEventListener("keyup",event=>{
        myBox.textContent ="Box is resting";
        myBox.style.backgroundColor = "aqua";
    });
document.addEventListener("keydown",event=>{

    event.preventDefault();
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp" : y-=moveAmount;
                             break;
            case "ArrowDown" : y+=moveAmount;
                             break;
            case "ArrowLeft" : x-=moveAmount;
                             break;
            case "ArrowRight" : x+=moveAmount;
                             break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`
        myBox.style.bottom = `${y}px`
        myBox.style.right= `${x}px`

    }
})