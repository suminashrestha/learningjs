//Qn 1
// let canDrive=(a)=>{
// if(a<18){
//     alert("You cannot drive yet")
// }
// else{
//     alert("You can drive now")
// }
// }
// let age= prompt("enter your age: ")
// Number.parseInt(age)
// canDrive(age)
//Qn2 and Qn3
let runAgain= true
while(runAgain){
   
    let canDrive=(a)=>{
        if(a<0){
            console.error("You have entered an invalid age ");
            exit(0);
        }
        if(a<18){
            alert("You cannot drive yet")
        }
        else{
            alert("You can drive now")
        }
    }
        let age= prompt("enter your age: ")
        age=Number.parseInt(age)
        
        canDrive(age)
        
 runAgain=confirm("Do you want to try again?")
    
}
