// Q8.Tumhare pass four employes ki details hai list mai:-
// Code Example
// [“neelam”,”programer”,”24”,”2400”,]
// [“komal”,”trainer”,”24”,”20000”]
// [“anuradha”,”HR”,”25”,”40000”]
// [“Abhishek”,”manager”,”29”,”63000”]
// ab aapko 4 dictionaries create karni hai jaise ki emp1 emp2 emp3 and emp4.
// har ek employee ka dictionary main name,designation,age and salary honi chahiye.
// aur ye sab dictionary ki keys hai jismai maine list main value di hai. Iska use kar ke aapko ek json file
// create karni hai? Jaise ki niche diya hai.
// Output:-
// Code Example
// { 
//     "emp1":{ "name":"nilam",
//       "Designation":"programmer",
//       "Age":"34",
//       "salary":"24000",
//       }

//    "emp2":
//      { "name":"komal",
//        "Designation":"Trainee",
//        "Age":"24",
//        "salary":"20000" ,
//        }


//    "emp3":
//       { "name":"anuradha",
//         "Designation":"HR",
//         "Age":"25",
//         "salary":"40000",
//         }


//    "emp4":
//       { "name":"Abhishek",
//         "Designation":"Manager",
//         "Age":"29",
//       }
// }

var employes_data=[["neelam","programer","24","2400",],["komal","trainer","24","20000"],["anuradha","HR","25","40000"],
["Abhishek","manager","29","63000"]];
dic={}
const user_input=require("readline-sync")
for (i of employes_data){
  d={}
  employ=user_input.question("Enter employ :- ")
  d["Name"]=i[0]
  d["Designation"]=i[1]
  d["age"]=i[2]
  d["salary"]=i[3]
  dic[employ]=d
}

var fs=require("fs");
fs.writeFileSync("employes_details.json",JSON.stringify(dic,null,4))
var read=fs.readFileSync("employes_details.json")
read=JSON.parse(read);
console.log(read);
