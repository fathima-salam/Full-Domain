let employees = [
  { name: "Aisha", salary: 25000 },
  { name: "Rahul", salary: 32000 },
  { name: "Fathima", salary: 40000 }
];


let salaries = employees.reduce((acc,x)=> acc.salary> x.salary ? acc : x,0)
console.log(salaries);