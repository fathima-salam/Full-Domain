let promise1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Promise 1 finished');
        },8000)
    })
}
let promise2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Promise 2 finished');
        },4000)
    })
}
let promise3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Promise 3 finished');
        },6000)
    })
}

Promise.race([promise1(),promise2(),promise3()]).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})