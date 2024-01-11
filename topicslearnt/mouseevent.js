/*
eventListener = click,mouseover,mouseout
                ,addEventListener(event,callback);
*/
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

//using callback
/*function changeColor(event){
     event.target.style.backgroundColor = "tomato";
     event.target.textContent = "Ouch!";
 }
 myBox.addEventListener("click",changeColor);
*/

//using arrow function
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
         event.target.textContent = "Ouch!";
});
myBox.addEventListener("mouseover", event=>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent ="Don't Do it!";
})
myBox.addEventListener("mouseout", event=>{
    event.target.style.backgroundColor = "rgb(71, 211, 83)";
    event.target.textContent ="Click Me";
})
myButton.addEventListener("click",event=>{
    event.target.style.backgroundColor = "brown";
    event.target.textContent = "Clicked!";

});