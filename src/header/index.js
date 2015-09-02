import * as _ from '../util';
let cache = new WeakMap();

function load(){
	_.toArray(
		document.getElementsByTagName('header')
	).forEach( transform );
}

function transform( el ){
	var h1El = el.getElementsByTagName('h1')[0];
	cache.set( el, {
		thresholdValue: h1El.offsetTop + h1El.offsetHeight + 10,
		reachedThreshold: false
	} );

	let handler = scrollHandler.bind(el);
	document.addEventListener( 'scroll', handler );
	document.addEventListener( 'mousewheel', handler );
}

function scrollHandler( e ){
	let me = this;
	let data = cache.get(me);

	let curValue = document.body.scrollTop || document.documentElement.scrollTop;
	let thresholdValue = data.thresholdValue;
	if( curValue>thresholdValue ){
		if( !data.reachedThreshold ){
			data.reachedThreshold = true;
			me.style.setProperty( 'position', 'fixed' );
			me.style.setProperty( 'top', -thresholdValue +'px' );
		}
	}else{
		if( data.reachedThreshold ){
			data.reachedThreshold = false;
			me.style.setProperty( 'position', 'static' );
			me.style.setProperty( 'top', 'auto' );
		}
	}
}

export { load };