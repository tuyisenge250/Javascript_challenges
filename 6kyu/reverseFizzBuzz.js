function reverseFizzBuzz(array) {
  console.log(array)
  const arr = []
  array.forEach((x,i,a) =>{
    if(x === "Fizz" && a.indexOf(x) === i){
      arr.push(i + 1)
    }else if(x === "Buzz" && a.indexOf(x) === i){
      arr.push(i + 1)
    }else if(x === "FizzBuzz" && arr.length !== 2){
      if(arr.length === 0){
        arr.push(i + 1, i + 1)
      }else if(arr.length === 1){
        arr.push(i+1)
      }
    }
  })
  if(((array.indexOf("Buzz") < array.indexOf("Fizz"))) && array.indexOf("Buzz") !== -1){
    return arr.reverse()
  }else{
    return arr
  }
}