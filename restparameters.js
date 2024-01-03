/*
rest parameters= (...rest) allow a function work 
                    with a variable number of arguments
                    by bundling them into an array

                    spread= expands an array into separate elements
                    rest= bundles separate elements into an array
*/
 function sum(...numbers){
    let result=0;
    for(let number of numbers){
        result+=number;
    }
    return result;
 }
 const total= sum(1,2,3,6);
 console.log(`Your total is $${total}`)

 //For string
 function combineStrings(...strings){
    return strings.join(" ");
 }
 const fullName= combineStrings("Mr.","Harry","Potter","III");
 console.log(fullName);