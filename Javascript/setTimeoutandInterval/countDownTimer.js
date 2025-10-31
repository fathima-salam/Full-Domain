let count=10;
function timer(count){
while(count>=0){
    setTimeout(()=>{
        console.log(count);
        count--;
    },1000)
    
    if(count==0){
        console.log('Time’s up!');
    }
}
}
timer(count)