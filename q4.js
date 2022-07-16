// Q.3 Python object ko json string mai convert karne ka program likho?

const js_obj={
    "name": "David", 
    "class": "I", 
    "age": 6}

const json_data=JSON.stringify(js_obj);
console.log(json_data);
console.log(typeof json_data);
