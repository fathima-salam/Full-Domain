let arr1 = [1,2,3];
let arr2 = [2,3,4];

let newArr = [...arr1,...arr2];
let freq = newArr.reduce((acc,x)=>{
    acc[x] = (acc[x]||0)+1;
    return acc;
},{});

console.log(freq);

let keys = Object.entries(freq).map(([key,value])=>{ return key});
console.log(keys);

