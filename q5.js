// Q4.Python dictionary(sort by key) object ko json data ::mai convert karne ka program likho?
// Input :-
// Code Example
var js_obj={
    '4': 5, 
    '6': 7, 
    '1': 3, 
    '2': 4}
let l=[]

for(let i in js_obj){
    l.push(i)
}
let new_obj={}
for(j in js_obj){
   for(k in l){
        if(j==l[k]){
            new_obj[j]=js_obj[j]
        }
    }
}
console.log(new_obj);
const json_obj=JSON.stringify(new_obj);
console.log(json_obj);
console.log(typeof json_obj);
