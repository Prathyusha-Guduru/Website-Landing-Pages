//*******************************Variables*******************************
// let num = "yo";
// console.log(num)

//*******************************Constants*******************************
// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

//Primitives ==> Strings, boolean, number, undefined,null
// let name = "Prathyusha";
// let age = 18;
// let isDumb = false;
// let firstName = undefined;  
// let selectedNumber = null;  
//undefined is both a type and a value
// To create the value of a variables based on selection
//Js is a dynamic language i.e type of a variable can be changed
//There is just one data type for all kinds of numbers whiich is "numbers"
//Reference types ==> Objects, Arrays and Functions

// let person = {namePerson : "Prathyusha",agePerson:18};
// console.log(person.namePerson);

//*******************************Arrays*******************************


// let selectedColors = ['red','blue'];
// selectedColors[2] = 'gray';
// selectedColors[3] = 4;
// console.log(selectedColors.length);

//*******************************FUNCTIONS*******************************
// function greet(name)
// {
// 	console.log("Hello " + name);
// }

// greet('Prathyu');

//******************************* OBJECT LITERALS*******************************

// const person = {firstName:"Prathyusha",lastName : "Guduru",age : 18,hobbies: ['music','dance']}
// console.log(person);

//Always use const unless you know you are going to re-asssign
// const score = 0;
// console.log(score);
// score+=1;
// console.log(score);


//*******************************Array of objects*******************************

// const todo = [
// 	{id : 1, text : "Clean your room", isDone : false},
// 	{id : 2, text : "Clean the bathroom", isDone: false},
// 	{id : 3, text : "Empty the bin", isDone : false}
// ]
// console.log(todo[0].text);

// const JSON_todo = JSON.stringify(todo)
// console.log(JSON_todo);


//*******************************LOOPS*******************************

// for(let x =0;x<10;x++){
// 	console.log(`For loop number is ${x}`);
// }

// let x=0;
// while(x<10){
// 	console.log(`While loop number is ${x}`);
// 	x++;
// }

// arr = [1,2,3,4,45,56,78]

// for(let x=0;x<arr.length;x++){
// 	console.log(`The element at ${x} is ${arr[x]}`);
// }

// for(let i of arr){
// 	console.log(i);
// }

//*******************************forEach, map, filter*******************************
const todo = [
	{id : 1, text : "Clean your room", isDone : false},
	{id : 2, text : "Clean the bathroom", isDone: false},
	{id : 3, text : "Empty the bin", isDone : false}
];

// todo.forEach(function (i) {
// 	console.log(i.text);
// })


// const todoText =  todo.map(function(i){
// 	return i.text;
// });

// console.log(todoText);


// const toBeDone = todo.filter(function (i) {
// 	return i.isDone === false;
// }).map(function (j) {
// 	return j.text;
// });

// console.log(toBeDone);

//*******************************CONDITIONALS*******************************

const x = 15;
if(x===10){
	console.log("x is 10");
}
else if(x>10){
	console.log('x is more than 10');
}
else {
	console.log('x is not 10');
}

//*******************************TERENARY OPERATORS*******************************
// condition ? what to do if the condition is satisfied(if) : what to do if not satisfied(else)
x>10 ? console.log('x is greater than 10') : console.log('x is less than 10') ;

const color = x>10 ? 'red' : 'blue';
console.log(color);


//*******************************SWITCH STATEMENT*******************************
switch (color) {
	case 'red':
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');
		break

	default:
		console.log('color is not red and blue');
		break;
}


//******************************* ARROW FUNCTIONS*******************************
const addNum = (num1,num2) => (num1+num2);
console.log(addNum(1,2));

const addHello = firstName => ("Hello " + firstName);
console.log(addHello("Prathyusha"));