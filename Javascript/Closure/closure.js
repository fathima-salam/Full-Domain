function main(){
    let a =20;
    function inner(){
        console.log(2);
    }
    return inner;
}

let res = main();
res();