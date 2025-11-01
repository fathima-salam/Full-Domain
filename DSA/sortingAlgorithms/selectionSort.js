let prices = [250, 120, 300, 90, 600, 150];

function selectionSort(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
        let maxIndex = i;
        for(let j = i+1;j<n;j++){
            if(arr[j]> arr[maxIndex]){
                maxIndex = j;
            }
        }
        if(maxIndex!=i){
            [arr[i],arr[maxIndex]]=[arr[maxIndex],arr[i]];
        }
    }
    return arr;
}
console.log(selectionSort(prices))