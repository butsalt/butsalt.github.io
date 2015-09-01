import * as _ from '../util';
let cache = new WeakMap();

function load(){
	_.toArray(
		document.getElementsByTagName('header')
	).forEach( transform );
}

function transform( el ){
	var h1El = el.getElementsByTagName('h1')[0];
	let thresholdValue = h1El.offsetTop + h1El.offsetHeight;
	cache.set( el, {
		thresholdValue
	} );

	console.log(`-{thresholdValue}px`);
	el.style.setProperty( 'top', `-${thresholdValue}px` );

	let handler = scrollHandler.bind(el);
	document.addEventListener( 'scroll', handler );
	document.addEventListener( 'mousewheel', handler );
}

function scrollHandler( e ){
	let me = this;
	let curValue = document.body.scrollTop || document.documentElement.scrollTop;

	let { thresholdValue } = cache.get(me);
	if( curValue>thresholdValue ){
		me.style.setProperty( 'position', 'relative' );
		me.style.setProperty( 'top', curValue - thresholdValue +'px' );
	}else{
		me.style.setProperty( 'position', 'static' );
		me.style.setProperty( 'top', 'auto' );
	}
}

load();