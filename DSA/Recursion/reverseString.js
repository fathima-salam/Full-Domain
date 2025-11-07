function reverseString(str,left,right){
    if(left >= right)return str;
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    return reverseString(str,left+1,right-1);
}

let names = 'fathima';
let arr = names.split('');
let result = reverseString(arr , 0,arr.length).join('');
console.log(result);
