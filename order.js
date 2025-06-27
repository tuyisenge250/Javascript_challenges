function order(words){
  let sortedString = {}
  words.split(" ").forEach(x => {
    x.split("").forEach(y => {
      typeof (y-1) === "number" ? sortedString[y] = x : ""
    }
                        ) 
  })
  console.log(sortedString)
  let neededString = []
  for(let i = 0; i< words.split(" ").length; i++){
    neededString.push(sortedString[(i + 1).toString()])
  }
  return neededString.join(" ")
}