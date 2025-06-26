function sortArray(array) {
  let evenObj = {}
  array.forEach((num, index) => {
    if(num % 2 === 0){
      evenObj[index] = num
    }
  }
  )
  let odd = array.filter(x => x % 2 !== 0)
  console.log(odd)
  let sortedOdd = odd.sort((a,b) => a - b)
  for(let key in evenObj){
      sortedOdd.splice(key, 0, evenObj[key])
  }
  return sortedOdd
}
