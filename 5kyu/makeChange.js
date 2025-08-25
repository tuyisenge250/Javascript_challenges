const makeChange = (amountt) => {
  const result = {}
  let amount = amountt
  while(amount > 0){
    if(amount >= 50){
      const res = amount / 50
      result["H"] = Math.floor(res)
      amount = amount - 50 * result["H"]
    }else if(amount >= 25){
      const res = amount / 25
      result["Q"] = Math.floor(res)
      amount = amount - 25 * result["Q"]
    }else if(amount >= 10){
      const res = amount / 10
      result["D"] = Math.floor(res)
      amount = amount - 10 * result["D"]
    }else if(amount >= 5){
      const res = amount / 5
      result["N"] = Math.floor(res)
      amount = amount - 5 * result["N"]
    }else{
      result["P"] = amount
      amount = 0
    }
  }
  return result
};
