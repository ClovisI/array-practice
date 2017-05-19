// this is an anonymous function

function windowReady () {
	var subhead = document.getElementById("subhead");
	var container = document.getElementById("fortune-container");
	console.log(subhead);
}

window.onload = windowReady;

// window.onload = function () {
// 	console.log("zomg ready!";
// }

var spices = ["clove", "nutmeg", "ancho"];
function countEmUp(arr) {
	// count how many letters there are in each word of the array
	var allSpices = arr.join("");
	return allSpices.length
}

// console.log(countEmUp(spices));

function toggleSpice(name) {
	var spiceIndex = spices.indexOf(name);
	//add name to spices if it's not there
	if (spiceIndex==-1){
		spices.unshift(name);
		console.log('added to spices ' + name);
	}
	else {
		spices.splice(spiceIndex,1);
		console.log('removed from spices: ' + name);
	}
	// remove name from spices if it is
}

// var addSpices = [ancho, vanilla, paprika];

toggleSpice("vanilla");
toggleSpice("ancho");
console.log(spices);
// alert("Let's get to work! ")
// TODO: Build an array of strings that could be answers to magic 8 ball type questions.
var answers =  [];

/* TODO: Write a form handler function that will:
  1. capture the question asked in the form
  2. randomly select an element from the array of answers
  3. console log something conversational to user, like "Oh, you want to know [question]? Well, I think... [answer]"
*/


var integers = [1,2,3,4,5];

// function arrayCreate ( ){
//
// 	for (var i = 0; i < integers.length; i++) {
// 		integers = [i];
// 		 console.log(array[i] * 2);
// 	}
// }
//
function answerQuestion () {
	event.preventDefault();

	var question = document.magic8.question.value;
	var rando = Math.floor(Math.random() *)

	var container = document.getElementById("fortune-container");
	container.innerHTML = "<p>" + answer + "</p>";
}

// function isBigEnough(element) {
// 	console.console.log('checking ' + element);
// 	return element > 4;
// }
//
// var index = integers.findIndex
