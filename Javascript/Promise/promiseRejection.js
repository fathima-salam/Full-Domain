// Create a function getData(id) that returns a Promise:
// 	•	Resolves with "Data fetched for ID: <id>" if id is greater than 0
// 	•	Rejects with "Invalid ID" otherwise
// Call it with both valid and invalid IDs and handle success/error using .then() and .catch().


function getData(id){
    return new Promise((resolve,reject)=>{
        if(id > 0){
            resolve(`Data fetched for ID: ${id}`);
        }else{
            reject('Invalid ID');
        }
    })
}

getData(-1).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error);
})