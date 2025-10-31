let rolls = [101, 105, 110, 120, 135, 140];

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return 'not found'
}
console.log(linearSearch(rolls,120))
