function fibonacci(num){
    if(num=== 0)return 0;
    if(num=== 1)return 1;
    return fibonacci(num-1)+fibonacci(num-2);
}

function printFibonacci(num){
    for(let i=0;i<=num;i++){
        console.log(fibonacci(i));
    }
}

printFibonacci(4);