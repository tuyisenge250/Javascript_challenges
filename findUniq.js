function findUniq(arr) {
    const un = []
    arr.forEach((x) => {
        if(un.length === 0){
                un.push(x)
            }
        else if(!un.includes(x)){
            un.push(x)
        }
    })
    const ele1 = arr.filter(x => x === un[0])
    const ele2 = arr.filter(x => x === un[1])
    if(ele1.length === 1){
      return ele1[0]
    }
    return ele2[0]
}