function solution (roman) {
  // complete the solution by transforming the 
  // string roman numeral into an integer
  const number = {"I" : 1, "V" : 5, "X" : 10, "L" : 50, "C": 100, "D": 500, "M": 1000}
  const romanNumber = roman.split("").map((x,index,arr) => {
    if(index === arr.length){
      return number[x]
    }else if(number[x] > number[arr[index + 1]]){
      return number[x]
    }else if(number[x] < number[arr[index + 1]]){
      return -number[x]
    }else{
        if((index+2)){
          if(number[index + 1] > number[arr[index + 2]]){
                  return number[x]
          }else if(number[x] < number[arr[index + 1]]){
            return -number[x]
          }else{
            return number[x]
          }
        }else{
          return number[x]
        }
    }
    })
  console.log(romanNumber)
  return romanNumber.reduce((sum, x) => sum += x, 0)
}
