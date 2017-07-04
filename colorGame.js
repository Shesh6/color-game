var difficulty = 9;
var colors = [];
var pickColor;

init();

function init(){
	setModeButtons();
	setSquares();
	$("#reset").click(resetGame);
	resetGame();
}

function setModeButtons(){
	$(".mode").each(function(index,button){
		$(this).click(function(){
			$(".mode").removeClass("selected");
			$(this).addClass("selected");
			if ($(this).text()=="Easy"){
					difficulty = 3;
				} else if ($(this).text() == "Medium"){
					difficulty = 6;
				}
				else{
					difficulty = 9;
				}
			resetGame();
		});
	});
}

function setSquares(){
	$(".square").each(function(index,square){
		$(this).click(function(){
			var clicked = $(this).css("backgroundColor");
			if(clicked == picked){
				$("#message").text("Correct!");
				$("#reset").text("Play Again?");
				changeColors(clicked);
			}
			else{
				$("#message").text("Wrong...");
				$(this).css("backgroundColor", "#232323");
			}
		});
	});
}

function changeColors(color){
	$(".square").css("backgroundColor",color);
	$("h1").css("backgroundColor", color);
	$("button").css("color", color);
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
	$("#display").text(picked);
	changeColors("steelblue");
	$(".square").each(function(index,square) {
		if(colors[index]){
			$(this).css("backgroundColor", colors[index]);
			$(this).css("visibility","visible");
		}
		else{
			$(this).css("visibility","hidden");
		}
	});
	$("#reset").text("New Colors");
	$("#message").text("Go!");
}
