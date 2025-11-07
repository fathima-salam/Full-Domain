function reverse(num){
    if(num < 10)return String(num);
    return num%10 + reverse(Math.floor(num/10));
}

console.log(reverse(21324));