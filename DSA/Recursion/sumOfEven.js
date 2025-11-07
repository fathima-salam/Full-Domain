function sumofEven(n){
    if(n===0) return 0;
    if(n%2===0){
        return n+ sumofEven(n-1);
    }else{
        return sumofEven(n-1);
    }
}
console.log(sumofEven(8));