//pending, fullfilled,rejected

new Promise((resolve, reject)=>{
    if(5>10) {
        resolve("Resolved");
    } else {
        reject("Rejected");
    }
});

Promise
.then((resolve)=>{
    console.log(resolve);
    if(10 > 2){
        resolve("hello world");
    } else {
        reject("some error");
    }
})
.then((resolve)=>console.log(resolve))
.catch((reject)=>console.log(reject));