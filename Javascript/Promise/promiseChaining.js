let taskOne = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Task One Done');
        },1000)
    })
}
let tasktwo = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Task Two Done');
        },1000)
    })
}
let taskthree = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Task Three Done');
        },1000)
    })
}

taskOne().then((result)=>{
    console.log(result);
    return tasktwo();
}).then((result)=>{
    console.log(result);
    return taskthree();
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})