let str1 = "hello world ";
console.log(str1.replace("hello world", "Hello World"))

let str2 = "i love javascript";
let wordCount = str2.split(" ").length;
console.log(wordCount);

let str3 = "my name is jhon";
console.log(str3.split(" ").join("-"));

let str4 = "The Quick brown fox";
let longest = str4.split(" ").reduce((a, b) => a.length >= b.length ? a : b);
console.log(longest);

let str5 = "john Doe Smith";
console.log(str5.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));



