function palindrome(num){
    function reverse(num){
        if(num < 10)return String(num);
        return num%10 + reverse(Math.floor(num/10));
    }
    return num === Number(reverse(num));
}

console.log(palindrome(121));
console.log(palindrome(321));
console.log(palindrome(1100110011));