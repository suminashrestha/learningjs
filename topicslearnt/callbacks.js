//callback= a function that 
//      is passed as an argument 
//       to another function
    // used to handle asynchronous operations:
    // 1. Reading a file
    // 2. Network requests
    // 3. Interacting with databases.

hello(goodbye)
function hello(callback){
    console.log("Hello!");
    callback();
}
function goodbye(){
    console.log("Goodbye!");
}

//Program to add two nums using callback function
function sum(callback,x,y){
    let result= x+y;
    callback(result);

}
function display(result){
    console.log(result);
}
sum(display,2,3)
