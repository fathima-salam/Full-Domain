function discount(a){
    return function(b){
        return (a*b)/100;
    }
}
// const dis = discount(10);
// console.log(dis(120));
console.log(discount(10)(120))
