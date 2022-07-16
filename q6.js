// Q.9 Apki pass ek shopping name ki ek dictionary hai
// Code Example
// {
//     "shopping_list":
//         { 
//             "chaco":"15",
//             "Biscuits":"50",
//             "Diary_milk":"30",
//             "ice_cream":"20",
//         } 
// }
// Apki dictionary ka use kar ke ek json file create karna hai.
// Aur apko kuch task perform karne hai jaise ki
// 1.main dekhna chahta hu shopping list ko json file dekhna.
// 2.phir main user se poochu ga ki kon sa item khareedna chahte ho.
// 3.uske baad user name dega phir user se input poochege jaise ki tum kitne item chahte ho.
// 4.phir aapka wo number of items json file se remove karna hai.
// 5.Agar tumhe shopping items add karna hai to tumko json file main insert karna hoga.

// Output:-
// Code Example
// show shopping_list:- 

// {
//     "shopping_list":{ 
//         "chaco":"15",
//         "Biscuits":"50",
//         "Diary_milk":"30",
//         "ice_cream":"20",
//          } 
// }

const dic={
        "shopping_list":{ 
            "chaco":"15",
            "Biscuits":"50",
            "Diary_milk":"30",
            "ice_cream":"20",
             } 
}

const user_input=require("readline-sync");
const ask=user_input.question("what you want to add/a or remove/r:-");
if(ask==="r"){
    const item=user_input.question("what item you want:-");
    const quentity=user_input.questionInt("how much you want to buy:-");
    for(i in dic){
        for(j in dic[i]){
            if(j==item){
                s=(Number(dic[i][j]))
                if(quentity<=s){
                    dic[i][j]=String(s-quentity)
                }
                else{
                    console.log("out of stock");
                }
            }
        }
    }
}
else if(ask==="a"){
    const item=user_input.question("what item you want:-");
    const quentity=user_input.questionInt("how much you want to buy:-");
    for(j in dic){
        dic[i][item]=String[quentity]
    }
}
else{
    console.log("start from begning");
}

var fs=require("fs");
fs.writeFileSync("shopping_lis.json",JSON.stringify(dic,null,4))
var read=fs.readFileSync("shopping_lis.json")
read=JSON.parse(read);
console.log(read);


