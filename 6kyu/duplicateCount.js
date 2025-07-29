function duplicateCount(text){
  let count = 0
  let counted = []
  text.toLowerCase().split("").forEach((x,i,arr) =>  {
    if(arr.indexOf(x) !== i && !counted.includes(x)){
      count++
      counted.push(x)
    }
    }) 
  return count
}