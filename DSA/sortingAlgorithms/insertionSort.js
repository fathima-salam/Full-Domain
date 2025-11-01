let ages = [34, 22, 45, 19, 27, 31];

function insertionSOrt(arr){
    let n = arr.length;
    for(let i=1;i<n;i++){
        let key = arr[i];
        let j=i-1;
        while(j >= 0 && arr[j]< key){
            arr[j+1]= arr[j];
            j--;
        }
        arr[j+1]=key
    }
    return arr;
}
console.log(insertionSOrt(ages));