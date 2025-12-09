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
//let personCopy = {...person, address : { ...person.address} };//shallow copy it will copy only first level properties
let personCopy = JSON.parse(JSON.stringify(person));//deep copy it will copy all level properties
person.age = 34;
person.address.city = "mumbai";


 console.log("person", person);
 console.log("personCopy", personCopy);

 //rest operator

 function add(a,b, ...num) {
    return a + b;
 }

 console.log(add(10,30,56,78,56,34,34,84,7,3,32));