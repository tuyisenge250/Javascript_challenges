function findUniq(arr) {
  const my =  arr.filter((x,i,arr) => !x.split("").every(y => arr[0].toLowerCase().split("").includes(y.toLowerCase())))
  return my.length === 1 ? my[0] : arr[0]
}