let arr = [10,5, 20, 8,100];
let largest = 0;
let secLargest = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secLargest = largest
        largest = arr[i]
    }
    if((arr[i] < largest) && (arr[i] > secLargest)){
        secLargest = arr[i];
        
    }
}
console.log(secLargest);