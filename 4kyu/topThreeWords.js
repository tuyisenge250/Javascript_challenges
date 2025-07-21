function topThreeWords(text) {
  const allowedChar = "qwertyuiopasdfghjklxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'".split("")
  const allowedText = text.split("").map(x => allowedChar.includes(x) ? x.toLowerCase() : " ").join("").split(" ").filter(x =>{
    if(x !== "" && x !== "'"){
      return x
    }
  })
  let frequency = {}
  
  for(let word of allowedText){
    if(word in frequency){
      frequency[word] += 1
    }else{
      frequency[word] = 1
    }
  }
  console.log(frequency)
    return Object.entries(frequency).sort((a,b) => b[1] - a[1]).slice(0,3).map(x => x[0]);
}
