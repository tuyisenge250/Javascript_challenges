function persistence(num) {
  let times = 0
  let i = num
  while(i >= 10){
    times++
    i = i.toString().split("").reduce((multi, val) => multi *= val, 1)
  }
  return times
}