let prices = [100, 200, 300, 400, 500, 600];

function binarySearch(arr,target){
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid] < target){
            start = mid+1;
        }else{
            end = mid-1;
        }
    }
    return 'not found';
}

console.log(binarySearch(prices,600));