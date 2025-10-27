let arr = [1, 2, 3, 2, 4, 5, 1];

let freq = arr.reduce((acc,x)=>{
    acc[x] = (acc[x]||0)+1
    return acc;
},{});
console.log(freq);

let duplicates = Object.entries(freq).filter(([key,value])=>value>1).map(([key])=>Number(key));
console.log(duplicates)