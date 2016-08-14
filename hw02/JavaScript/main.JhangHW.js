//question 2: Write 3 different functions that take input and 
// return something via the console or an alert.


function alertName (SomeName){
	return alert (SomeName); // [CC] alert returns an undefined value
}

// [CC] careful with variable names collisions
// the function "someNumber" and its 2nd argument "SomeNumber"
// are close to being the same, which can cause confusion.
// If they are the same, JavaScript won't let you call the 
// function from within itself (recursion)
function someNumber (numberOne, SomeNumber){ 
	console.log (parseInt(numberOne) + 10 + parseInt(SomeNumber));
}

function writeMyName(){
	console.log("Julieta HANG");
}
writeMyName();

//question 3//
// Number 3. Create a function that takes two numbers, 
// multiplies one number by the other, and fires an alert 
// of the result. 
function multiplyingNumbers (numberOne, SomeNumber){
	alert (parseInt(numberOne) * parseInt(SomeNumber));
}

// 4. Create a multidimensional array related to a subject that 
// interests you. Output two of the items in sub-arrays to the 
// console.

var multiArray= [
	["Reading", "Dancing", "Eating"],
	["Purple", "Blue", "Pink"]
]
console.log (multiArray[0][0]) //reading 
console.log (multiArray [1][1]) //blue

//5. Write a script that checks if a variable is greater than 10. 
// If it is, alert the user that their variable is greater than 10. 
// If it is not, alert the user of the difference (their variable - 10).
var value = parseInt(prompt("please enter a value"));
if (value >10){
	alert ("This value is greater than 10");

}else{
	alert ("the difference between your number and 10 is:" + (value-10));
}
// [CC] you'd probably want to write:
//      Math.abs(10-value)
// instead of:
//      (value-10)
// 
//  Math.abs() returns the absolute value, meaning it will convert a
//  negative number to a positive number equally far from 0...
//  so Math.abs(10-5) == Math.abs(10-15)


// 6. Write a function that checks if a string passed in as an 
// argument is the same as another string. If it is, console.log "success". 
var password = "opensesame";

function similarStrings (oneString, anotherString){
	if (oneString === anotherString) {
		alert("Success")
	}}
similarStrings( prompt("Guess the password"), password );


//7. Declare a function that takes a first name and a last name as 
// arguments and combines them to a full name in an alert.

var firstName = prompt("Please Enter First Name");
var lastName = prompt("Please Enter Last Name");

alert ("Your Name is" + " " + firstName + " " + lastName)


//8//

function pickADoor (doorNumber){
	doorNumber = parseInt (doorNumber) - 1;
	var prizes = ["a phone", "a puppy", "a bracelet", "a car", "a boat"];
	if (prizes [doorNumber]){
		alert ("You won" + " " +prizes [doorNumber]);
	} else {//error
	  alert("Sorry, wrong number!")
	}
}

