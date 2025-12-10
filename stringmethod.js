//length

let str1 = "Hello World";
console.log(str1.length);
console.log(str1.at(-5));
console.log(str1.charAt(2));
console.log(str1.slice(2, 4));
console.log(str1.indexOf("l"))
console.log(str1.lastIndexOf("l"));
console.log(str1.includes("osdfg"));
console.log(str1.startsWith("He"));
console.log(str1.endsWith("ld"));
console.log(str1.replace("l", "i"));
console.log(str1.replaceAll("l", "i"));
console.log(str1.concat("sdfghjk"));

let str2 ="         welcome                ";

console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());

console.log(str1.repeat(3));

console.log(str1.split(" "));

let str3= "john";
console.log(str3.padStart(10, "wer"));
console.log(str3.padEnd(10, " "));