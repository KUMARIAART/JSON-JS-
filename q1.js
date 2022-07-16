// JSON data
// "name": "John"



// JSON Object
// The JSON object is written inside curly braces { }. JSON objects can contain multiple
//  key/value pairs. For example,

// JSON object
// { "name": "John", "age": 22 }



// JSON Array
// JSON array is written inside square brackets [ ]. For example,

// JSON array
// [ "apple", "mango", "banana"]

// // JSON array containing objects
// [
//     { "name": "John", "age": 22 },
//     { "name": "Peter", "age": 20 }.
//     { "name": "Mark", "age": 23 }
// ]



// Accessing JSON Data
// You can access JSON data using the dot notation. For example,

// JSON object
// const data = {
//     "name": "John",
//     "age": 22,
//     "hobby": {
// 	"reading" : true,
// 	"gaming" : false,
// 	"sport" : "football"
//     },
//     "class" : ["JavaScript", "HTML", "CSS"]
// }

// // accessing JSON object
// console.log(data.name); // John
// console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

// console.log(data.hobby.sport); // football
// console.log(data.class[1]); // HTML



// You can also use square bracket syntax [] to access JSON data. For example,

// // JSON object
// const data = {
//     "name": "John",
//     "age": 22
// }

// // accessing JSON object
// console.log(data["name"]); // John
