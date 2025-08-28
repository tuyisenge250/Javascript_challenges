function looseChange(cents){
  const obj = {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
  let remain = cents
  while(remain > 0){
  if(remain >= 25){
    let v = Math.floor(remain/25)
    remain = remain - v * 25
    obj.Quarters = v
  }else if(remain >= 10){
    let v = Math.floor(remain/10)
    remain = remain - v * 10
    obj.Dimes = v
  }else if(remain >= 5){
    let v = Math.floor(remain/5)
    remain = remain - v * 5
    obj.Nickels = v
  }else if(remain >= 1){
    let v = Math.floor(remain/1)
    remain = 0
    obj.Pennies = v
  }
    }
  return obj
}