import './index.css';

import _ from '../util';
import config from '../config';

let cache = new WeakMap();

function load () {
    if (_.support.touch) {
        return;
    }
    _.toArray(
        document.getElementsByClassName('J-button')
    ).forEach(transform);
}

function transform (el) {
    el.classList.add('button');
    var canvas = document.createElement('canvas');
    canvas.setAttribute('width', '0');
    canvas.setAttribute('height', '0');

    el.addEventListener('mouseenter', initCanvas);
    el.addEventListener('mouseenter', enterHandler);
    el.addEventListener('mouseleave', leaveHandler);

    cache.set(el, {
        canvas,
        extent: null
    });

    let firstEl = el.childNodes[0];
    el.insertBefore(canvas, firstEl);
}

function initCanvas () {
    let me = this;
    let data = cache.get(me);

    let rect = me.getBoundingClientRect();
    let extent = {
        width: Math.ceil(rect.width),
        height: Math.ceil(rect.height)
    };
    data.extent = rect;

    let canvas = data.canvas;
    canvas.setAttribute('width', extent.width);
    canvas.setAttribute('height', extent.height);

    me.removeEventListener('mouseenter', initCanvas);
}

function enterHandler (e) {
    paintCircle.call(this, e, '#444');
}

function leaveHandler (e) {
    paintCircle.call(this, e, '#fff');
}

function calDistance ({x: x1, y: y1}, x2, y2) {
    return Math.ceil(
        Math.sqrt(
            Math.pow(x1 - x2, 2) +
            Math.pow(y1 - y2, 2)
        )
    );
}

function calRadius(pos, {width, height}) {
    return Math.ceil(
        Math.max(
            calDistance(pos, 0, 0),
            calDistance(pos, 0, height),
            calDistance(pos, width, 0),
            calDistance(pos, width, height)
        )
    );
}

function paintCircle (e, color) {
    let me = this;

    let x = e.offsetX - 1;
    let y = e.offsetY - 1;

    let {canvas, extent} = cache.get(me);
    let ctx = canvas.getContext('2d');

    let radius = calRadius(
        {
            x,
            y
        },
        extent
    );
    let {animationDuration} = config;

    let startTime = null;
    function paint (timestamp) {
        if (startTime === null) {
            startTime = timestamp;
        }

        let progress = timestamp - startTime;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(
            x,
            y,
            radius * progress / animationDuration,
            0,
            2 * Math.PI
        );
        ctx.fill();

        if (progress < animationDuration) {
            _.animate(paint);
        }
    }

    _.animate(paint);
}

export default {
    load
};