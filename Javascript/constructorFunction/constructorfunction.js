function User(name,age){
    this.name = name;
    this.age = age ; 
    this.getname = function(){
        console.log(`name is ${name} , and age is ${age}`);
    };
}

const user1 = new User('fathima',22);
user1.getname();