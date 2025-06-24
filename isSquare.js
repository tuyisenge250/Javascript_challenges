var isSquare = function(n){
  if(n < 0 ){
    return false
  }if(n === 0 || n === 1){
    return true
  }
  for(let i = 2; i < n; i++){
    let div = n / i
    if(div*div === n){
      return true
    }
  }
  return false; // fix me
}