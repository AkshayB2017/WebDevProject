alert('Hello World');
console.log('Hey there');
console.error('This is an error');
console.warn('This is a warning');

//const age=30;
//age=31;

//console.log(age);

let num=22;
num=23;
console.log(num);

const name='John';
const age=30;
const rating=4.5;
const isCool=true;
const x=null;
const y= undefined;
let z;


//console.log(typeof name);
//console.log(typeof age);
//console.log(typeof rating);
//console.log(typeof isCool);
//console.log(typeof x);
//console.log(typeof y);

console.log('My name is'+ name+' and my age is'+ age);
const hello= `My name is ${name} and my age is ${age}`;

console.log(hello);

const s='Hello World';
console.log(s.length);


//console.log('Hello World'.split(''));
//console.log('Technology, World, Fit, Bat, Sharma '.split(','));

//Arrays
const numbers=[0,1,2,3,4,5];
const fruit=['apple','banana','orange','pears'];

console.log(numbers);
console.log(fruit);

fruit.push('mango');
console.log(fruit);
fruit.unshift('apple');
console.log(fruit);
console.log(Array.isArray('hello'));


/*const person= {
    firstName:'John',
    lastName:'Doe',
    agee:40,
    hobbies:['music','movies','sport'],
    address: {
        street: 'main street',
        city: 'boston',
        state:  'MA'
    },
}
console.log(person)

*/
const todos=[
    {
        id:1,
        text: 'Take Out Trash',
        isCompleted: true,
    },
    {
        id:2,
        text: 'Eat out',
        isCompleted: true,
    },
    {
        id:3,
        text: 'Study',
        isCompleted: false,
    },
];

/*const todoJSON= JSON.stringify(todos);
console.log(todoJSON);

//console.log(todos);

for(let todo of todos) {
    console.log(todo.text);
}


todos.forEach(function(todo){
console.log(todo.text);
});

const todoText=todos.map(function(todo){
return todo.isCompleted === true;
});

console.log(todoText);

const todoText1=todos.filter(function(todo){
    return todo.isCompleted === true;
    });
console.log(todoText1);    

*/

function Person(firstName, lastName, dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
}

const person1= new Person('John','Doe',23-12-1998);
console.log(person1);