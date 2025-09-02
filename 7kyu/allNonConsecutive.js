function allNonConsecutive (arr) {
  let ar = []
arr.forEach((x,j,arr) =>{
   if(j !== arr.length - 1){
     if(x + 1 !== arr[j+1]){
       ar.push({i : j + 1, n: arr[j+1]})
     }
   }
 })
  return ar
}