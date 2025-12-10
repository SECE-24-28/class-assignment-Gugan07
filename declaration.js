// var , let and const

var a = 10;
a = 20;
var b = a;
 var a = 30;
 console.log("a",a);
 console.log("b",b);

 //let
 let c = 10;
c=20;
console.log("c",c);

//const
const d = 10;
//d = 20
 //const d = 30;
 console.log("d",d);

 let person = {
    fname : "harry",
    lname : "potter",
    age : 23,
    address : {
        city : "hogwarts",
        pincode :696969,
    },
 };

 const { fname, lname, age, address } = person;
 const { city, pincode } = person.address;
 console.log(person.fname);
 console.log(person.age);
 console.log(person.address.pincode);