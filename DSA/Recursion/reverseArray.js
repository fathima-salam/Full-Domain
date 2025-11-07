let arr = [2,3,4,1,5,6,7,5];

function reverseArray(arr,left,right){
    if(left >=right) return arr;
    let temp = arr[left];
    arr[left] = arr[right]
    arr[right] = temp;
    return reverseArray(arr,left+1,right-1);
}

console.log(reverseArray(arr,0,arr.length-1));