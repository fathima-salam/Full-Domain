// Create a generator function that simulates pagination.
// It should take an array and a page size, and each .next() call should return the next page of items.

let arr = [1,2,3,4,5,6,7,8,9,0,12,23,45,89]
function* pagination(arr,page){
    let start = 0;
    while(start < arr.length){
        yield arr.slice(start,start+page)
        start+=page;
    }
}

const res=pagination(arr,3);
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);
