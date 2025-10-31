let people = [
  { name: "John", department: "IT" },
  { name: "Mary", department: "HR" },
  { name: "Alex", department: "IT" },
  { name: "Sana", department: "Finance" }
];

let groupbyProperty = people.reduce((acc,x)=>{
    if(!acc[x.department]){
        acc[x.department] = [];
    }
    acc[x.department].push(x);
    return acc;
},{})

console.log(groupbyProperty)