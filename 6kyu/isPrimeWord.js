function isPrime(s){
  if(s === 1 || s === 2){
    return true
  }else{
 for(let i = 2; i < s; i++){
   if(s % i === 0){
     return false
   }else{
     continue
   }
 }
  return true
}
}
function primeWord(arr){
    return arr.map(x => x[0].split("").map((_,i,ar) => ar[i].charCodeAt() + x[1])).map(y => +y.some(f => isPrime(f)))
}
