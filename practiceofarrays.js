//creating an array of square of given array
let arr=[1,2,3,4,6,7]
let n= arr.map((x)=>{
    return x*x;
})
console.log(n)

//filter for numbers divisible by 10 from an array
let arr2=[12,23,34,45,60,50,90]
let arr3=arr2.filter((a)=>{
    return a%10==0
})
console.log(arr3)

//using reduce to calculate factorial of a given number in an array
let a=[1,2,3,4]
let b= a.reduce((x1,x2)=>{
    return x1*x2
})
console.log(b)


