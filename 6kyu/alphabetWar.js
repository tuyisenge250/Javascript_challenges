function alphabetWar(fight)
{
  const left = ["s","b","p","w"]
  const right = ["z","d","q","m"]
  const leftInArr = fight.split("").filter((x) => left.includes(x))
  const rightInArr = fight.split("").filter((x) => right.includes(x))
  console.log(rightInArr)
  console.log(leftInArr)
  const sumLeft = leftInArr.reduce((sum, x) => sum + (left.indexOf(x) + 1), 0)
  const sumRight = rightInArr.reduce((sum, x) => sum + (right.indexOf(x) + 1), 0)
  console.log(sumRight)
  if(sumLeft > sumRight){
    return "Left side wins!"
  }else if(sumLeft < sumRight){
    return "Right side wins!"
  }
   return "Let's fight again!";
}