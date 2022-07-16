// Q7.Text file data ko json file data mai convert karo,jaise ki neeche diya hai?
// Input :-
// Code Example

// Text.txt:-  
//  Name Abhishek
//  Designation CEO of navgurukul
//  Gender male
//  Age 29
// Output:-
// Code Example
// Json_file.json:-


var js_dic={
    "Name": "Abhishek",
    "Designation": "CEO of navgurukul",
    "Gender":"male",
    "Age": "29"
}

var fs=require("fs");
fs.writeFileSync("Text.json",JSON.stringify(js_dic,null,4))
var read=fs.readFileSync("Text.json")
read=JSON.parse(read)
console.log(read)

