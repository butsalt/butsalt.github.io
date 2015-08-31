import * as _ from '../util';

function load(){
	_.toArray(
		document.getElementsByClassName('button')
	).forEach( transform );
}

function transform( el ){
	
}

export { load };