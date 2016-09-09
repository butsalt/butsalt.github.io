import './index.css';

import _ from './util';

import header from './header';
import main from './main';
import button from './button';

_.ready(function () {
    main.load();
    header.load();
    button.load();
});