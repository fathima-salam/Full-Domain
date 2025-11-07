function countDigits(num){
    if(num === 0) return 0;
    let lastDigit = num%10 != 0 ? 1 :0;
    return lastDigit + countDigits(Math.floor(num/10));
}

console.log(countDigits(101));