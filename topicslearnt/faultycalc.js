//This is a faulty calculator which does the following:

// + ----> -
// * ----> +
// - ----> /
// / ----> **
//It performs wrong operation 10% of the times


let a= prompt("Enter first number: ")
let b= prompt("Enter operator number: ")
let c= prompt("Enter second number: ")

let obj={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}
let random= Math.random();
document.write(random)
if(random>0.1){
    console.log(`The result is: ${a} ${b} ${c}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    //This performs wrong calculations
    c= obj[c]    
    console.log(`The result is: ${a} ${b} ${c}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)

}