function reverseWords(str,left,right){
    if(left >= right)return str;
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    return reverseWords(str,left+1,right-1);
}

let sentance = 'im fathima salam';
let arr = sentance.split(" ");

let result = arr.map((x)=>x.split("")).map((x)=> reverseWords(x,0,x.length).join("")).join(" ");
console.log(result);