import * as _ from '../util';
let cache = new WeakMap();

function load(){
	_.toArray(
		document.getElementsByTagName('header')
	).forEach( transform );
}

function transform( el ){
	document.addEventListener( 'scroll', scrollHandler.bind(el) );
}

function scrollHandler( e ){
	let me = this;

}

load();