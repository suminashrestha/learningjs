 /*
 Callback hell = situation in JS where callbacks are nested
                within other callbacks to the degree where the code is difficult
                to read. Old pattern to handle asynchronous functions.
                Use promises + async/await to avoid Callback Hell
 */

const task1=(callback) => {
    setTimeout(()=>{

    console.log("Task 1 completed");
    callback();
    },2000);
}
const task2=(callback) => {
    
    setTimeout(()=>{

    console.log("Task 2 completed");
    callback();

    },2000);
}
const task3=(callback) => {
    
    setTimeout(()=>{

    console.log("Task 3 completed");
    callback();

    },2000);
}
const task4=(callback) => {
    
    setTimeout(()=>{

    console.log("Task 4 completed");
    callback();

    },2000);
}
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=> console.log("All tasks completed"));
        })
    });
})