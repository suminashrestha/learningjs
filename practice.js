//prog to print the marks of a student in an object using  for loop
const std={
    ram : 30,
    hari : 25,
    sita:35
}
for(let i=0;i<Object.keys(std).length;i++){
      console.log("The marks of "+ Object.keys(std)[i]+ "are"+ std[Object.keys(std)[i]])
} 