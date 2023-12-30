//Qn 4 redirecting if number greater than 4
 
let num= prompt("Enter any number: ")
num=Number.parseInt(num);
if(num>4){
    location.href="https://google.com"
}
else{
    document.write("Not redirected to google.com")
}