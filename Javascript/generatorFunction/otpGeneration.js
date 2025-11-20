function* otpGeneration(){
    const digits = '1234567890';
    while(true){
        let res ='';
        for(let i=0;i<4;i++){
            res+= digits[Math.floor(Math.random()*10)];
        }
        yield res;
    }
}

let res= otpGeneration();
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);



