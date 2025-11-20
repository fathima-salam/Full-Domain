function createUser(firstname,lastname){
    return {
        firstname : firstname,
        lastname : lastname,
        getName : ()=>{
            console.log(`name is ${firstname} ${lastname}`);
        }
    }
}

const user1 = createUser('fathima','salam');
const user2 = createUser('alice','bob');

user1.getName();
user2.getName();