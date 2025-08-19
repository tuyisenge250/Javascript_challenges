function matrixfy(str) {
  if(str.length === 0){
    return 'name must be at least one letter'
  }
  const size = Math.ceil(Math.sqrt(str.length))
  const addedArr = (new Array(size * size - str.length)).fill(".")
  const newArr = [...str.split(""), ...addedArr]
  return Array.from({length: size}, (v,i) => newArr.slice(i * size, i * size + size))
}