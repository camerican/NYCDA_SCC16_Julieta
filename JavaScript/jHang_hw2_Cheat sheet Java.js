// 1. Create a "cheat sheet" JavaScript file that contains working examples with comments of:

// - Variables
var name = "Zach";
var numberOfWidgets = 10;
var isCodingCool = true;

// - Debugging (alerts, comments, the console)
To open the console: command+ option + J
Console.log (content):It is a place to output data. is the preferred way to check our code -debugging/finding what is going wrong- because ti is simple. It won’t affect the screen experience. Remember to take them out when you upload a page.


// - Different data types
DATA TYPES:
	String: is a collection of characters “ ” (words) 
	Number
	Boolean: true/false
	Undefined (no value)
We assign these to a value.

// - Arrays
Collection of values, it appears between [ ] -square bracket indentation
To get values outside arrays we have to use index location.
They are zero index: the 1st element is always 0. That is why we write [0] for 1st element

Indexes: tracks what occurs in what order

They can nest others: 
	var colors = [ “pink, blue] 
	var clothes = [ "skirt", "shorts"] 

You can have multiarrays:	
	Var cars [colors, clothes]

// - Testing
one equal sign: assigns value to the following element 
double equals operator:
	- to check if 2 sides have the same
	- It does type checking

triple equals:
	Evaluates values and types (strings, numbers)

!== we are negating the operation (is like non equals)

> < greater or minor or greater and equal
// - Logic
if statement:
if: Allows us to run code only if a certain test evaluates to true. 
if (5<10){
console.log(content)}

The else statement, allows us to run code if certain test does not fit the first test evaluation (it is false).

if(5>10){
}
else{
}

// - Functions
▸ A function is a way to encapsulate code for later use
▸ It can take arguments, which are used as variables inside the function
▸ It usually returns a value, which can be used later on or displayed immediately

function alertName(somePersonsName){
	return alert(somePersonsName);
}
// invoke the function
alertName("Zach");
