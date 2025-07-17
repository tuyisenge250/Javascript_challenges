function high(x){
  const str = "abcdefghijklmnopqrstuvwxyz"
  return x.split(" ").reduce((sum,x) => x.split("").reduce((s,y)=> s + str.indexOf(y) + 1, 0) > sum.split("").reduce((s,y)=> s + str.indexOf(y) + 1, 0) ? sum = x : sum, "")
}