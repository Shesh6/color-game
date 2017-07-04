var squares = document.querySelectorAll(".square");
var display = document.getElementById("display");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var difficulty = 6;
var colors = [];
var pickColor;

init();

function init(){
	setModeButtons();
	setSquares();
	resetButton.addEventListener("click", resetGame);
	resetGame();
}

function setModeButtons(){
	for (var i = modeButtons.length - 1; i >= 0; i--) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent == "Easy" ? difficulty = 3: difficulty = 6;
			resetGame();
		});
	}
}

function setSquares(){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].addEventListener("click",function(){
			var clicked = this.style.backgroundColor;
			if(clicked == picked){
				message.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clicked);
			}
			else{
				message.textContent = "Wrong...";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}

function changeColors(color){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
	$("button").css("color", "color");
	$("button:hover").css("color", "white");
	$("button:hover").css("backgroundColor", color);
	// for (var i = modeButtons.length - 1; i >= 0; i--) {
	// 	if(modeButtons[i].classList.contains("selected")){
	// 		modeButtons[i].style.backgroundColor = color;
	// 	}
	// 	else{
	// 		modeButtons[i].style.color = color;
	// 	}
	// }
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length)
	return colors[random];
}

function generateColors(n){
	var arr = []

	for (var i = n - 1; i >= 0; i--) {
	arr.push(randomColor());
	}

	return(arr)
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+ b+")";
}

function resetGame(){
	colors = generateColors(difficulty);
	picked = pickColor();
	display.textContent = picked;
	changeColors("steelblue");
		for (var i = squares.length - 1; i >= 0; i--) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else{
			squares[i].style.display = "none";
		}
	}
	resetButton.textContent = "New Colors";
	message.textContent = "Go!";
}