/*
classList = Element peropery in JS used to interact with
            an element's list of classes(CSS Classes)
            Allows you to make reusable classes for many elements
            across your webpage.
            *.  add()   *. remove()  *.  toggle()  
            *.  replace(oldClass,newClass)
            *.  contains()
*/
//dynamically appending css property
const myButton = document.getElementById("myButton");
myButton.classList.add("enabled");
// myButton.classList.remove("enabled");
// myButton.classList.add("hover");

myButton.addEventListener("mouseover",event=>{
    event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout",event=>{
    event.target.classList.toggle("hover");
});

myButton.classList.add("enabled");
myButton.addEventListener("click",event=>{

    if(event.target.classList.contains("disabled")){
            event.target.textContent+= "🤬";
    }
    else{
        event.target.classList.replace("enabled","disabled");

    }
});

