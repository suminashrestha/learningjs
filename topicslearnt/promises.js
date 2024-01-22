//Promise = An object that manages asynchronous operations.
            // Wrap a Promise object around(aynchronous code)
            // "I promise to return a value"
            // PENDING -> RESOLVED OR REJECTED
            // new Promise((resolve,reject) => {asynchronous code})
      
function walkdog(){
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

                const takenOut = false;
                if(takenOut){
                    resolve("You take the trash out");
                }
                else{
                    reject("You didn't take the trash out");

                }              
            }, 500);

        })
    
}
walkdog().then(value=> {console.log(value); return cleanKitchen()})
         .then(value=> {console.log(value); return takeOutTrash()})
         .then(value=> {console.log(value); console.log("You finished all the chores")})
         .catch(error=> console.error(error));
