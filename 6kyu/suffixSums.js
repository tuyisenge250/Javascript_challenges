function suffixSums(a) {
  return a.map((x,i,arr) => arr.slice(i).reduce((sum,cur) => sum += cur))
}