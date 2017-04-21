//Window management
function WindowSetup() {
	ratio = 9.0 / 16.0; //This provides an aspect ratio for games.
	screeny = window.innerHeight; screeny -= screeny * 0.1; //This gets the interior height of the Browser Window.
	screenx = screeny * ratio; //This calculates the width of a 9/16 ratio window in a browser.
	xu = screenx / 100.0; //This divides the screen into 1% incraments along the x axis.
	yu = screeny / 100.0; //This divides the screen into 1% incraments along the y axis.
	c = document.getElementById("render");
	c.height = screeny;
	c.width = screenx;
	ctx = c.getContext('2d');
}