let numbers = [2, 3, 4, 5, 10, 11, 13, 15];

let sum = 0;
for(let i=0;i<numbers.length;i++){
    let num = numbers[i];
    let isPrime = true;

    if(num < 2) continue;

    for(let j=2;j<=Math.sqrt(num);j++){
        if(num%j === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        sum+=num;
    }
}

console.log(sum);