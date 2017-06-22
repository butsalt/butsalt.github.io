import './index.css';

import _ from '../util';
let cache = new WeakMap();

function load(){
  _.toArray(
    document.getElementsByTagName('header')
  ).forEach( transform );
}

function transform(el) {
  let h1El = el.querySelector('h1');
  cache.set(
    el,
    {
      thresholdValue: el.offsetTop + h1El.offsetTop + h1El.offsetHeight + 10,
      reachedThreshold: false
    }
  );

  let infoEl = el.querySelector('div');
  let pEl = infoEl.querySelectorAll('p')[1];

  _.toArray(
    document.querySelectorAll('.track')
  ).forEach(function(el) {
    el.style.setProperty('width', trackSize + 'px');
    el.style.setProperty('height', trackSize + 'px');
    el.style.setProperty('top', deltaSize + 'px');
    el.style.setProperty('left', deltaSize + 'px');
  });

  let handler = scrollHandler.bind(el);
  document.addEventListener('scroll', handler);
  document.addEventListener('mousewheel', handler);

  handler();
}

function scrollHandler(e) {
  let me = this;
  let data = cache.get(me);

  let curValue = document.body.scrollTop || document.documentElement.scrollTop;
  let thresholdValue = data.thresholdValue;
  if (curValue > thresholdValue) {
    if (!data.reachedThreshold) {
      data.reachedThreshold = true;
      me.style.setProperty('position', 'fixed');
      me.style.setProperty('top', -thresholdValue +'px');
    }
  } else {
    if (data.reachedThreshold) {
      data.reachedThreshold = false;
      me.style.setProperty('position', 'relative');
      me.style.setProperty('top', '0');
    }
  }
}

export default {
  load
};