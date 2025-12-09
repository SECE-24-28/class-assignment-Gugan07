//named func
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
console.log("---------------");

//anonymous function
var sub = function (a,b) {
    return b - a;
};

console.log(sub(10,20));
console.log("---------------");

//IIFE funcction - Immediate invoked function expression

(function (a,b) {
    return a * b;
})(10, 20);

//arrow function

var div = (a,b) => {
    return b / a;
}

console.log(div(10,20));
