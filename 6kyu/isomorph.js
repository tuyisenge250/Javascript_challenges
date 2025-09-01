function isomorph(a, b) {
    return a.length === b.length ? a.split("").every((x,i,arr) => arr.filter(y => y === x).length === b.split("").filter((y,_,ar) => y === ar[i] && b.split("")[arr.indexOf(x)] === b.split("")[i]).length) : false;
}