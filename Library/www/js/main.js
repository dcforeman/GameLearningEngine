//Setup the program units
var degrees = ( 2.0 * Math.PI ) / 360.0; //This allows us to create circles using degrees instead of rads
var xu, yu, screeny, screenx, c, ctx, ratio;

//Setup Window
window.onload = function() {
	WindowSetup();
}

//Program Loop
function drawIt() {
	
	setTimeout( function() {
    	
    	//Call the draw loop.
    	window.requestAnimationFrame(drawIt);
		//
		WindowSetup();
		cls();
	
		circle( x(randomPosition()), y(randomPosition()), size(5), 1 );
		box( x(randomPosition()), y(randomPosition()), size(5), size(5), 1 );
		
	}, 1000 / 30 );

}
drawIt();
