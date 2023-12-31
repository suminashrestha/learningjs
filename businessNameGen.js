/*
Business Name Generator using a list of adjectives and shop name and another word

Ajectives:
Crazy 
amazing 
fire

Shop Name:
Engine
foods
Garments
 
Another word:
Bros
Limited
Hub
*/


let random= Math.random();
let first,second,third;
//To generate first word:
if(random<0.33){
    first="Crazy"
}
else if(random>0.33 && random<0.66){
    first="Amazing"
}
else{
    first="Fire"
}

//To generate second word:
random= Math.random();
if(random<0.33){
    second="Engine"
}
else if(random>0.33 && random<0.66){
    second="Food"
}
else{
    second="Garments"

}

//To generate third word:
random= Math.random();
if(random<0.33){
    third="Bros"
}
else if(random>0.33 && random<0.66){
    third="Limited"
}
else{
   third="Hub"
}

console.log(`${first} ${second} ${third}`)