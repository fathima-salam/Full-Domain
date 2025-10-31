let person = { name: "Fathima", age: 22, city: "Chennai" };


function removeLast(obj){
    let keys = Object.keys(obj);

    let lastindex = keys[keys.length-1];

    delete obj[lastindex]

    return obj;
}
console.log(removeLast(person));
