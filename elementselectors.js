/*element selectors= methods used to targetg and manipulate HTML elements
                    They allow you to select one or multiple HTML elements from
                    the DOM 
1. document.getElementById() //ELEMENT OR NULL
2. document.getElementsByClassName() //HTML COLLECTION
3. document.getElementsByTagName() //HTML COLLECTION
4. document.querySelector() //ELEMENT OR NULL
5. document.getSelectorAll() //NODELIST
*/
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "red";

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");
for(let fruit of fruits){
fruit.style.backgroundColor = "yellow";
}
console.log("fruits")
