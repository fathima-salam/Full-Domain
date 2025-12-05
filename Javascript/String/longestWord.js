let sentance = 'The orientation for students in the First Project weeks has been scheduled in the tool';

let largest = sentance.split(" ").reduce((acc,x)=>acc.length > x.length ? acc : x ,'')

console.log(largest);