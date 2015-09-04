const TEST_FONT_FAMILY = '"Microsoft YaHei", Arial, sans-serif';
const TEST_TEXT = 'test';
const INTERVAL = 50; //ms
const MAX_DURATION = 1200; //ms

function ready(){
	return Promise.all( [ fontHasBeenLoaded() ] );
}

function fontHasBeenLoaded(){
	let testEl = document.createElement('div');
	let el = document.createElement('span');
	let compareEl = document.createElement('span');

	el.textContent = TEST_TEXT;

	compareEl.textContent = TEST_TEXT;
	compareEl.style.setProperty( 'font-family', TEST_FONT_FAMILY );

	testEl.appendChild( el );
	testEl.appendChild( compareEl );

	testEl.style.setProperty( 'position', 'absolute' );
	testEl.style.setProperty( 'left', '-9999px' );
	testEl.style.setProperty( 'top', '-9999px' );

	document.body.appendChild( testEl );

	return new Promise( function( resolve, reject ){
		let duration = -INTERVAL;

		function handler(){
			duration += INTERVAL;
			if( el.offsetWidth !== compareEl.offsetWidth ||
				duration > MAX_DURATION
			){
				document.body.removeChild( testEl );
				resolve();
			}else{
				global.setTimeout( handler, INTERVAL );
			}
		}
		handler();
	} );
}

export {
	ready
};