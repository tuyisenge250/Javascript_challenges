function solve(arr) {
  return arr.map(x => x.filter((x,i,a) => a.indexOf(x) === i)).reduce((sum,curr) => sum * curr.length, 1);
};