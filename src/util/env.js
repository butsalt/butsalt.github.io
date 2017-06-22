function ready(handler) {
  window.addEventListener('load', handler);
}

export default {
  ready,
  support: {
    touch: 'ontouchstart' in document.documentElement
  }
};