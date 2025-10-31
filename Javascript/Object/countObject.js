let user = { name: "Fathima", age: 22, city: "Chennai", role: "Developer" };

let count = 0;
for(let x in user){
    count++;
}
console.log(count);