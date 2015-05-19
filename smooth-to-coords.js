function smoothTo(x, y) {

    var dX = x - window.scrollX,
    	dY = y - window.scrollY,
    	stepX = Math.abs(dX) < 100 ? dX : dX / 10,
        stepY = Math.abs(dY) < 100 ? dY : dY / 10;

    if( stepX===0 && stepY===0) {
    	return;
    }

  	window.scrollBy(stepX, stepY);
    window.requestAnimationFrame(smoothTo.bind(null, x, y));

}

export default smoothTo;
