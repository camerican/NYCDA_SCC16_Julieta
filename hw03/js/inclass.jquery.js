$(document).on("ready", function(){
	setTimeout(function(){
	 $("h1").html ("Welcome to my exercise");
	 makeAppear();
	}, 1000);

	$("#button1").on('click', function(){
		var messageDiv = $('#message'); // get the reference of the div
		messageDiv.show().html("let's explore places to eat in west village"); // show and set the message
		setTimeout(function(){ messageDiv.hide().html('');}, 3000);

		$(".box1").slideDown(1000)
		$(".box2").slideDown(2000) 
		$(".box3").slideDown(3000) 
		document.getElementsByClassName("information")[0].innerHTML = "these are some of my favorite places to eat"
	

		$(".information").hover(function(){
		if( $(".box3").css("display") != 'none') {
			$(this).toggleClass("active");
		}


	});
	});

	
	$("#button2").on('click', function(){
		var messageDiv = $('#message2'); // get the reference of the div
		messageDiv.show().html("...let's see where they are located..."); // show and set the message
		// setTimeout(function(){ messageDiv.hide().html('');}, 3000);

		$("#map").slideDown(1000);
		$("h3").slideDown(1000);
		$("#slideMe").animate({
			right:"200px"
		},4000);
		$("h4").animate({
			left:"30px"
		},2000);
		$("#schedule").animate({
			left:"-30px"
		},2000);

	var h4 =document.getElementsByTagName("h4")[0]
	if(h4.innerHTML.length >13){

	document.getElementsByTagName("h4")[0].innerHTML += " " +"for all of them"

	} 

	document.getElementsByTagName("tr")[1].getElementsByTagName("td")[0].innerHTML = "<strong> "+ " " + " <strong> Aria </strong> " 

	});	

});

function makeAppear(){
	$("#hello").fadeIn(1000);
}



// for(attribute in document.getElementsByTagName("h3")[0]){console.log(attribute)}

var global_name = "Juli"
var global_github_acccount= "qkis_h"
//return the number of repositories the user has//
function countRepositories ( account ){
	var repos = {
		"qkis_h": ["SCC", "example_form"],
		"someoneelse": ["SCC"]
	}
	if( typeof repos [account] != "undefined" ){
		return repos [account].length;
	}else{
		return 0;
	}
}


//EXERCISE SCOPES//
//declare a variable in global scope//
var default_weight =3;
function prioritize (weight){
	if(typeof weight ==="undefined"){
		weight= default_weight;
	}
	var item_value=4;
	return default_weight + item_value
	}
console.log (prioritize( ));

