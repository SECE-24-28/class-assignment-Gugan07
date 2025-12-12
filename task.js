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
let initials = str5.split(" ").map(word => word.charAt(0).toUpperCase())  .join("");     
console.log(initials); 

let str6 = "programming";
let result ="";
for(let char in str6) {
    if(!result.includes(str6(char))) {
        result +=char;
    }
}
console.log(result);

