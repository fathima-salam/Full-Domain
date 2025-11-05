const person1 = {
    name:'fathima',
    age:22,
    greet : function(place){
        console.log(`i am ${this.name} from ${place}`)
    }
}
const person2 = {
    name:'rahul',
    age: '25'
}

person1.greet.call(person2,'chennai');
person1.greet.apply(person2,['chennai']);
let bindd = person1.greet.bind(person2);
bindd('chennai');