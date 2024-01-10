//Array map method
let arr= [45,23,21]
let a = arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value+1 
})
console.log(a)

//Array Filter method
let arr2= [4,2,1,3,53,74]
let a2 = arr2.filter((a)=>{
   return a<10
})
console.log(a2)

//Array with reduce method
let arr3 = [1,2,3,4,2,1]
let newarr3= arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newarr3)