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


export {
    toArray
};