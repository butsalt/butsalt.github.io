require('normalize.css');
require('../styles/global.css');

import * as _ from './util';

import * as header from './header';
import * as main from './main';
import * as button from './button';

_.ready(function init () {
    main.load();
    header.load();
    button.load();
});