function balance(left, right) {
  let l = left.split("").reduce((sum,x) => x === '!' ? sum += 2: sum += 3, 0)
  let r = right.split("").reduce((sum,x) => x === '!' ? sum += 2: sum += 3, 0)
    return l === r ? 'Balance' : l > r ?  "Left" : "Right";
}