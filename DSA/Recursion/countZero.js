function countZero(num){
    if(num === 0)return 0;
    let lastDigit = num%10 === 0 ? 1 : 0;
    return lastDigit + countZero(Math.floor(num/10))
}

console.log(countZero(1001002));