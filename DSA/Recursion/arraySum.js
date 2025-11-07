let arr = [1,2,3,4,5,10];

function arraySum(arr){
    if(arr.length === 0)return 0;
    let firstValue = arr.shift();
    return firstValue + arraySum(arr);
}

console.log(arraySum(arr));