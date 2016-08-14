// jQuery allows us to select elements from the DOM (document object library) 
//and make them change, move, etc. It has similar syntaxis than css
//The common symbol to invoke jQuery library is $.
//the ("element identifier") is an argument being passed through jQuery's librray

//1. Always start by including the jquery library into your .html file. 
//Download from jquery.cdn. Select version 2.x

//2.Include the link in the heading of your .html file between <script> tags.
//Make sure it is before your .js link

//3. check if library is working in the console option in the webpage (option+command+j)

//4. When starting writing our jQuery document, the first line should be:
//$(document).ready() this is for avoiding the code to fire before the page is loaded.

//5. Anonymus funtions: we can either name our functions by naming them 
		//var "name of function"= function( ){};
//or use them anonymus. They allow us to: 
		//include functions inside functions, 
		//return something we determine.
	//They are written between ().

//6. Callback=  anonymus function are often used like this. They are anonymus functions
//supplied to another function, to be run when that function is done.

Example:
	var animateMenu = function(){
  $(".menu").animate( {opacity: .5} )
}
$(".menu").show(animateMenu)


//THINGS YOU CAN DO:

//A. SHOW/HIDE ELEMENTS: $("map").show();
//B.FADE IN/FADE OUT: $("#map").slideDown(1000);
//C. ANIMATE: $("#slideMe").animate({
		// 	right:"200px"
		// },4000);
//D.CLICK: $("#button2").on('click', function(){});		