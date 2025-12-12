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


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    console.log(response);
    let data = response.json();
    return data;
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));

//async & await

const fetchUsers = ()=> {
    try{
        fetch("https://jsonplaceholder.typicode.com/users");
        console.log("response",response);
        response.json();
        console.log("data", data);
    } catch (error) {
        console.error("error", error);
    }
};

fetchUsers();

