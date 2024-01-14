let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button =>{
    button.classList.add("enabled");
});

buttons.forEach(button =>{
    button.addEventListener("mouseover",event=>{
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button =>{
    button.addEventListener("mouseout",event=>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button =>{
    button.addEventListener("click",event=>{
        event.target.classList.replace("enabled","disabled");
    });
});