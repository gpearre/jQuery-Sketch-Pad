$(document).ready(function() {
	drawGrid(16);
	mouseOverEvent();
});

function clearGridButtonPress() {
	var size = prompt("Yo, how big (16-400)?");
	if (size != null && size >15 && size < 401) {
		deleteGrid();
		drawGrid(size);
		mouseOverEvent();
	} else {
		alert("The size you entered isn't valid.");
	}
};

function drawGrid(gridWidth) {
	var totalSquares = gridWidth*gridWidth;
	var x = 0;
	var curContainerId = 0;
	while(x<totalSquares) {
		if (x==0 || x%gridWidth == 0) {
			curContainerId += 1;
			$('body').append("<div class='container' id='container" + (curContainerId) + "'></div>");
		}

		$('#container' + curContainerId).append("<div class='square' id='square" + (x+1) + "'></div>");
		x+=1;
	};
	var cw = $('.square').width();
	$('.square').css({'height':cw+'px'});
}

function deleteGrid() {
	$('.container').remove();
}

function mouseOverEvent() {
	$('.square').mouseover(function(){
		var bgValue = $(this).css('background-color');

		if (bgValue == "rgb(255, 255, 255)") {
			var bgValue= randomColor();
		} else {
			bgValue = minus10(bgValue);
		}
		$(this).css('background-color', bgValue);
		
	});
}

function randomColor() {
	var rVal = Math.round(Math.random() * (255));
	var gVal = Math.round(Math.random() * (255));
	var bVal = Math.round(Math.random() * (255));
	var retValue = "rgb(" + rVal + "," + gVal + "," + bVal + ")";
	return retValue;
}

function minus10(rgbColor) {
	//requries input format of "rgb(255,255,255)"
	var colors = parseRGB(rgbColor);
	colors[0] = Math.round(colors[0] - (colors[0] * .1));
	colors[1] = Math.round(colors[1] - (colors[1] * .1));
	colors[2] = Math.round(colors[2] - (colors[2] * .1));
	return "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
}

function parseRGB(rgbColor) {
	var colorString = rgbColor,
    colorsOnly = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/),
    red = colorsOnly[0],
    green = colorsOnly[1],
    blue = colorsOnly[2];
    return colorsOnly;
}

