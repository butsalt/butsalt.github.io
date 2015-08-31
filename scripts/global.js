var FONT = '24px "Open Sans"';

function loop( els, handler ){
	var i,ii;
	for( i=0,ii=els.length; i<ii; i++ ){
		handler( els[i], i, els );
	}
}

var btnEls = document.getElementsByClassName('button');


loop( btnEls, function( el ){
	var parentEl = el.parentElement;

	var canvas = document.createElement('canvas');
	canvas.classList.add('button');

	var text = el.textContent;

	var ctx = canvas.getContext('2d');
	ctx.font = FONT;
	ctx.strokeText(text, 10, 50);
	parentEl.replaceChild( canvas, el );
} );