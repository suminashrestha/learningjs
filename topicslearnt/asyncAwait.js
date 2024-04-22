/* Async/Await = Async makes a function return a promise
                 Await makes an async function wait for a Promise
                Allows you to write asynchronous code in a synchronous manner
                Async doesn't have resolve or reject parameters
                Everything afteer await is placed in an event queue        
                */

function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog");

            }
            else{
                reject("You didin't walk the dog");

            }         
        },1500);
    });
}
    function cleanKitchen(){
        return new Promise((resolve,reject)=>{
    setTimeout(() => {
        const kitchenCleaned = true;
        if(kitchenCleaned){
            resolve("You clean the kitchen");
        }
        else{
            reject("You didn't clean the kitchen");
        }
    }, 2500);
});
}
    function takeOutTrash(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {

                const takenOut = true;
                if(takenOut){
                    resolve("You take the trash out");
                }
                else{
                    reject("You didn't take the trash out");

                }              
            }, 500);

        })
    
}

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You finished all the chores!!");
    
    }
    catch{
        console.log(error);
    }
}
doChores()