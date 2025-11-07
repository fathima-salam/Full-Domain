// let num = 567;
// console.log(num%10); // 7
// console.log(Math.floor(num/10)); // 67

function sumOfDIgit(num){
    if(num === 0)return 0;
    return num%10 + sumOfDIgit(Math.floor(num/10));
}
console.log(sumOfDIgit(546));