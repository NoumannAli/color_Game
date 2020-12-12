var numSquares = 6
var rgbcolors = genrateRandomNumber(numSquares);

var RightColor = randomNum();


var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#displayColor");
var displayAnswer = document.querySelector("#displayAnswer");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybutton = document.querySelector("#easybutton");
var hardbutton = document.querySelector("#hardbutton");

var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
for(var i =0; i<modeButtons.length;i++){
  modeButtons[i].addEventListener("click", function(){
  	modeButtons[0].classList.remove("selected");
  	modeButtons[1].classList.remove("selected");
  	this.classList.add("selected");

  	if(this.textContent === "EASY"){
  		numSquares = 3;
  	}else{
  		numSquares = 6;	
  	}

    reset();

  })
}

for(var i = 0; i< squares.length; i++){
	squares[i].style.background  = rgbcolors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;

		console.log(clickedColor)
	


		if(clickedColor === RightColor){
			displayAnswer.textContent = "Correct";
resetButton.textContent = ("Play Again");

	h1.style.background = clickedColor;
			
			randomColors(clickedColor);

		}else{
			this.style.background = "#232323";
			displayAnswer.textContent = "Try Again";


		}

	});

}

}


function reset(){

	rgbcolors = genrateRandomNumber(numSquares);
	RightColor = randomNum();
	displayAnswer.textContent = "";
	resetButton.textContent = "New Colors"
	colorDisplay.textContent = RightColor;
	for(var i = 0; i< squares.length; i++){
	squares[i].style.background  = rgbcolors[i];}

	for(var i= 0; i<squares.length; i++){
		if(rgbcolors[i]){
			squares[i].style.background = "block";
			squares[i].style.background = rgbcolors[i];
		}else{
			squares[i].style.background = "none";
		}
	}

	h1.style.background = "steelblue";


}


// easyButton.addEventListener("click", function(){

// 	easyButton.classList.add("selected")
// 	hardButton.classList.remove("selected")
// 	rgbcolors = genrateRandomNumber(3);
// 	 RightColor = randomNum();
// 	 colorDisplay.textContent = RightColor;

// 	 for(var i =0 ; i<squares.length; i++){
// 	 	if(rgbcolors[i]){
// 	 		squares[i].style.background = rgbcolors[i];
// 	 	}else{
// 	 		squares[i].style.display = "none";
// 	 	}
// 	 }
// })

// hardButton.addEventListener("click", function(){
	
// 	hardButton.classList.add("selected");
// 	easyButton.classList.remove("selected");



// 	rgbcolors = genrateRandomNumber(6);
// 	RightColor = randomNum();
// 	colorDisplay.textContent = RightColor;
// 	 colorDisplay.textContent = RightColor;

// 	for(var i =0 ; i< squares.length; i++){
// 		squares[i].style.background = rgbcolors[i];
// 		squares[i].style.display = "block";
// 	}

// })




resetButton.addEventListener("click", function(){

	rgbcolors = genrateRandomNumber(numSquares);
	RightColor = randomNum();
	displayAnswer.textContent = "";
	this.textContent = "New Colors"
	colorDisplay.textContent = RightColor;



	for(var i= 0; i<squares.length; i++){

		if(rgbcolors[i]){
			squares[i].style.background = "block";
			
			squares[i].style.background = rgbcolors[i];
		}else {
			squares[i].style.background = "none";
		}
	}



	// for(var i = 0; i< squares.length; i++){
	// 	if(squares[i].textContent === "EASY")
	// squares[i].style.background  = rgbcolors[i];}

	h1.style.background = "steelblue";

})

colorDisplay.textContent = RightColor;

// for(var i = 0; i< squares.length; i++){
// 	squares[i].style.background  = rgbcolors[i];

// 	squares[i].addEventListener("click", function(){
// 		var clickedColor = this.style.background;

// 		console.log(clickedColor)
	


// 		if(clickedColor === RightColor){
// 			displayAnswer.textContent = "Correct";
// resetButton.textContent = ("Play Again");

// 	h1.style.background = clickedColor;
			
// 			randomColors(clickedColor);

// 		}else{
// 			this.style.background = "#232323";
// 			displayAnswer.textContent = "Try Again";


// 		}

// 	});

// }




function randomColors(colors){
	for(var i =0; squares.length ; i++){
		squares[i].style.background = colors;
	}
}


function randomNum(){
	var random = Math.floor(Math.random() * rgbcolors.length);
	return rgbcolors[random];

}



// function genrateRandomNumber(num){
// 	var arr = []

// for(var i =0 ; i<num ; i++){
  
//  arr.push(randomColor())
	
// }
//    return arr;
// }


// function randomColor(){
// 	var r = Math.floor(Math.random() * 256);

// 	var g = Math.floor(Math.random() * 256);

// 	var b = Math.floor(Math.random() * 256);

// 	return "rgb(" + r + ", " + g + ", " + b + ")";
// }







function genrateRandomNumber(num){

	var arr = [];

	for(var i =0 ; i<num ; i++ ){

arr.push(randomColor());


	}

	return arr;

}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b +")";



}





