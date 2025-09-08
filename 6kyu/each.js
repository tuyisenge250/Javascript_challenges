function each(n, xs) {
  const arr = []
  if(n === 0){
    return []
  }else if(n < 0){
    for(let i = xs.length + n; i >= 0; i += n){
      arr.push(xs[i])
    }
  }else{
    for(let i = n - 1; i < xs.length; i += n){
      arr.push(xs[i])
    }
  }
  return arr;
}