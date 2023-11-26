"use strict";
let personName = "farhan jamil";
let words = personName.split(" ");
let titleCaseName = "";
// console.log (words[0].charAt(3).toUpperCase());
// console.log(words[1].split(""))
// console.log(words[0].slice(2))
// console.log(words[0].slice(1).toUpperCase())
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
// titleCaseName +=words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase(); 
console.log(titleCaseName);
