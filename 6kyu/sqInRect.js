function sqInRect(lng, wdth){
  if(lng === wdth){
    return null
  }
  const arr = []
  let length = lng
  let width = wdth
  while(length > 0 && width > 0){
    if(width > length){
      arr.push(length)
      width -= length
    }else if(length > width){
      arr.push(width)
      length -= width
    }else{
      arr.push(length)
      return arr
    }
  }
  
}