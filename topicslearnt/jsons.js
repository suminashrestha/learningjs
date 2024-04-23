/*
    JSON= Javascript Object Notation data-interchange format
    used for exchanging data between a server and a web application
    JSON files {key:value} Or [{},{},{}]

    JSON.stringify() = converts a JS object to a JSON string.
    JSON.parse() = converts a JSON string to a JS object 
*/

const names = ["Spongebob","Patrick","Squidward","Sandy"];
const person = {
    "name":"Spongebob",
    "age": 30,
    "isEmployed":true,
    "hobbies": ["Jellyfishing","fishing"]
};
const people = [{
    "name":"Spongebob",
    "age": 30,
    "isEmployed":true
},
{
    "name":"Patrick",
    "age": 34,
    "isEmployed":false
},
{
    "name":"Squidward",
    "age": 50,
    "isEmployed":true
},
{
    "name":"Sandy",
    "age": 27,
    "isEmployed":false
}]
const jsonString = JSON.stringify(people);
console.log(jsonString);
