function createEulerSquare(n) {
  const arr = Array.from({length: n}, (_,i) => i + 1)
  const arrOfarr1 = (new Array(n)).fill(arr).map((x,i) => [...x.slice(i,x.length),...x.slice(0,i)])
  const arrOfarr2 = arrOfarr1.map((x,i) => [...x.slice(i,x.length),...x.slice(0,i)])
    return [arrOfarr1, arrOfarr2]
}
