function scrollToElement(elm, padding = { x: 0, y: 0 }) {

    var dX = elm.getBoundingClientRect().left + padding.x,
    	stepX = Math.abs(dX) < 100 ? dX : dX / 10,

    	dY = elm.getBoundingClientRect().top + padding.y,
        stepY = Math.abs(dY) < 100 ? dY : dY / 10;

  	window.scrollBy(stepX, stepY);

    if( (dY === stepY || document.body.getBoundingClientRect().bottom<=window.innerHeight)
    	&& (dX === stepX || document.body.getBoundingClientRect().right<=window.innerWidth)
    	) {
    	return;
    }

    window.requestAnimationFrame(scrollToElement.bind(null, elm, padding));

}


export default scrollToElement;
