// setTimeout() = function in JS that allows you to schedule
// the execution  of a function after an amount of TimeRanges(milliseconds0)

// setTimeout(callback,delay);

//This is callback method:
// function sayHello(){
//     window.alert("Hello through callback method");
// }
// setTimeout(sayHello,3000);

// //This is anonymous function:
// setTimeout(function(){window.alert("Hello through anonymous function")},5000);

// //This is arrow function:
// setTimeout(()=>window.alert("Hello through arrow function"),7000); 

let timeoutId;
function startTimer(){
    timeoutId=setTimeout(()=>window.alert("Hello, Timer has started!"),3000);
    console.log("STARTED");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}