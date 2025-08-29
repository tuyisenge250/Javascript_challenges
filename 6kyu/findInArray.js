function findInArray(array, iterator) {
   const value = array.map((v,i,a) => iterator(v,i) ? i : "n").filter(x => typeof x === "number")
   return value.length > 0 ? value[0] : -1
};
