function longest(s1, s2) {
  let conS = (s1 + s2).split("")
  let unique = []
  for(let i = 0; i < conS.length; i++){
    if(!unique.includes(conS[i])){
      unique.push(conS[i])
    }
    continue;
  }
  return unique.sort().join("")
}