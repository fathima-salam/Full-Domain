function sumOfOdd(num){
    if(num === 0)return 0;
    if(num % 2 !== 0){
        return num+sumOfOdd(num-1);
    }else{
        return sumOfOdd(num-1);
    }
}
console.log(sumOfOdd(8))