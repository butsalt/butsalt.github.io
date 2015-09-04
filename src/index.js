require('normalize.css');
require('../styles/global.css');

import * as _ from './util';

import * as header from './header';
import * as main from './main';
import * as button from './button';

export default {
	init: function(){
		_.ready()
			.then( function(){
				main.load();
				header.load();
				button.load();
			} );
	}
};