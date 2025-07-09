function findMissingLetter(array)
{
  let letter = []
  for(let i = 0; i < array.length - 1; i++){
      if(array[i + 1].charCodeAt() - array[i].charCodeAt() === 2){
          letter.push(array[i].charCodeAt() + 1)
      }
  }
  return String.fromCharCode(letter[0])
}