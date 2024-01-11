/*Nodelist = static collection of HTML elements by (id,class,element)
            can be created by using querySelectorAll()
*/
const buttons = document.querySelectorAll(".buttons");

buttons.forEach(button=>{
    button.addEventListener("mouseover",event=>{
        event.target.style.backgroundColor = "pink";
    });
});
buttons.forEach(button=>{
    button.addEventListener("mouseout",event=>{
        event.target.style.backgroundColor = "blue";
    });
});
buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        event.target.style.backgroundColor = "tomato";
       //after clicking button color will be tomato even if mouse out:
        button.addEventListener("mouseout",event=>{
            event.target.style.backgroundColor = "tomato";
        });
    });
});