// Create three Promises:
// 	•	One resolves in 2 seconds with "Server A connected",
// 	•	One resolves in 4 seconds with "Server B connected",
// 	•	One rejects in 3 seconds with "Server C failed".

// Use Promise.all() to run them and observe what happens.
// Then, modify it using Promise.allSettled() to handle all results gracefully.

let promise1 = new Promise((resolve,reject)=> setTimeout(()=>{resolve('Server A Connected')},2000));
let promise2 = new Promise((resolve,reject)=>setTimeout(()=>{resolve('Server B connected')},4000));
let promise3 = new Promise((resolve,reject)=>setTimeout(()=>{reject('Server C failed')},3000));

Promise.all([promise1,promise2,promise3]).then((result)=> console.log(result)).catch((error)=>console.log(error));

Promise.allSettled([promise1,promise2,promise3]).then((result)=>console.log(result)).catch((error)=>console.log(error));