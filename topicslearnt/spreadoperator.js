/*spread operator = ...allows an iterable such as an 
array or string to be expanded
 into separate elements
 (unpacks the elements)*/

let numbers= [1,2,3,4,5]
//let max= Math.max(numbers); //shows NaN
//but:
let max= Math.max(...numbers);
console.log(max);

let username="Sumina Shrestha"
let letters= [...username].join("-");
console.log(letters);

let fruits= ["apple","orange","banana"];
let veggies=["potatoes","celery","carrots"];

let foods= [...fruits,...veggies,"tomatoes"];

console.log(foods);

