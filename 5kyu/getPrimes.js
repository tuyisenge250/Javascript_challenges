function isPrime(number) {
  if(number === 1 || number <= 0){
    return false
  }else if(number === 2){
    return true
  }
  const s2 = Math.ceil(Math.sqrt(number)) 
  for(let i = 2; i < number; i++){
    if(number % i === 0){
      return false
    }
  }
  return true
}

function getPrimes(start, finish) {
  const end = finish > start ? finish : start
  const begun = start > finish ? finish : start
  const length = Math.floor(end - begun) + 1
  if(length === 1){
    return []
  }
  const arr = Array.from({ length }, (_, i) => begun + i)
  return arr.filter(x => isPrime(x))
}