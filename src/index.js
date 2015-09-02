import * as header from './header';
import * as main from './main';
import * as button from './button';

export default {
	init: function(){
		header.load();
		main.load();
		button.load();
	}
};