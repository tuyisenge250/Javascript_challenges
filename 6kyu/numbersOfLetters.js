function numbersOfLetters(integer) {
  let numberName = ["zero","one","two","three","four","five","six","seven","eight","nine"]
  let firstWord = integer.toString().split("").map(x => numberName[+x]).join("")
  let value = [firstWord]
  while(value[value.length - 1] !== value[value.length - 1].length.toString().split("").map(x => numberName[+x]).join("")){
    value.push(value[value.length - 1].length.toString().split("").map(x => numberName[+x]).join(""))
  }
  return value
}