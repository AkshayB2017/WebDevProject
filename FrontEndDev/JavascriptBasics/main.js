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

