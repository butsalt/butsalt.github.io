function toArray(likeArr) {
  let i,ii;
  i = 0;
  ii = likeArr.length;
  let arr = new Array(ii);
  while (i < ii) {
    arr[i] = likeArr[i];
    i++;
  }
  return arr;
}

function extend (target) {
  Array.prototype.slice.call(
    arguments,
    1
  ).forEach(
    function (source) {
      Object.keys(source)
        .forEach(
          function (key) {
            if (!target.hasOwnProperty(key)) {
              target[key] = source[key];
            }
          }
        );
    }
  );
}


export default {
  toArray,
  extend
};