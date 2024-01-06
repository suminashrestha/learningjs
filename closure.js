//closure = A function defined inside another function,
//          the inner function has access to the variables
//          and scope of the other function

function outer(){
    let message = "Hello";
    function inner(){
        console.log(message);
    }
    inner();
}
outer();