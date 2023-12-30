alert("enter the value of a!")
let a = prompt("enter a here")
a= Number.parseInt(a)
alert("You entered a of type "+typeof(a))
let write= confirm("Do you want to write it to the page?")
if(write){
    document.write(a)
}
else{
    document.write("a was not writen")
}