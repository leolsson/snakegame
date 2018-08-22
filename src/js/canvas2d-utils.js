/**
 * 
 */

var drawCircle = function(ctx, circleX, circleY, cirkleize, cirkleFill) {
	ctx.beginPath();
	ctx.arc(circleX, circleY, cirkleize, 0, 360);
	ctx.fillStyle = "green";
	if (cirkleFill === true) {
		ctx.fill();
	} else {
		ctx.stroke();
	}
};
