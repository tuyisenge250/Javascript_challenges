function locate(arr, value) {
    return arr.flat(Infinity).filter(x => x == value).length > 0;
}