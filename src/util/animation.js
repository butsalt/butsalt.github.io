function animate(func) {
    if(global.requestAnimationFrame) {
        global.requestAnimationFrame(func);
    } else {
        setTimeout(function() {
            let timestamp = new Date().getTime();
            func(timestamp);
        }, 16);
    }
}

export default {
    animate
};