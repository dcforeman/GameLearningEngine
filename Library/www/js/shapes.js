//Drawing commands

function cls() { ctx.clearRect(0, 0, x(100),y(100)); }

function circle(  x, y, size, thickness ) {
	
	ctx.beginPath();
	ctx.arc( x, y, size, deg( 0 ), deg( 360 ) );
	ctx.lineWidth = thickness;
	ctx.closePath();
	ctx.stroke();
	
}

function box( x, y, width, height, thickness ) {

	var posx = x - (width / 2.0 );
	var posy = y - (height / 2.0 );
	ctx.beginPath();
	ctx.strokeRect( posx, posy, width, height );
	ctx.lineWidth = thickness;
	ctx.closePath();
	ctx.stroke();
	
}