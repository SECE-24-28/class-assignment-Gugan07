 let person = {
    fname : "harry",
    lname : "potter",
    age : 23,
    address : {
        city : "hogwarts",
        pincode :696969,
    },
 };

 //let personCopy = person;//normal copy
let personCopy = {...person};//shallow copy
person.age = 34;
person.address,city = "mumbai";
 console.log("person", person);
 console.log("personCopy", personCopy);