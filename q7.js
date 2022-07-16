// Q6.Python object key unique key value ko access karne ka program likho?
// Input :-
// Code Example
// const dic='{"a":1,"a":  2,"a":  3, "a": 4,"b": 1, "b": 2}'
// Output:-
// Code Example
// Original Python object:- 

// dict={
//     "a":  1, 
//     "a":  2, 
//     "a":  3, 
//     "a": 4, 
//     "b": 1, 
//     "b": 2
// }
// console.log(dict)
// Unique Key in a JSON object:-
// {'a': 4, 'b': 2}

const json_data='{"a":1,"a":  2,"a":  3, "a": 4,"b": 1, "b": 2}'
const js_obj=JSON.parse(json_data);
console.log(js_obj);


