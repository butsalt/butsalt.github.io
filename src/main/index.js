import * as _ from '../util';

function load(){
    _.toArray(
        document.getElementsByTagName('main')
    ).forEach(transform);
}

function transform(el) {
    el.style.setProperty('top', el.offsetTop + 'px');
}

export {
    load
};