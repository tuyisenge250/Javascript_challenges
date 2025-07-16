function narcissistic(value) {
  return value.toString().split("").map((x,i,arr) => Math.pow((+x), arr.length)).reduce((sum,x) => sum += x, 0) === value
}
