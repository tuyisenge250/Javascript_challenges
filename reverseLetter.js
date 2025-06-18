// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string
function reverseLetter(str) {
  const albert = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
  const filteredList = str.split('').filter((x) => albert.split('').includes(x))
  let reversed = []
  
  for(let i = filteredList.length - 1; i >= 0; i--){
    reversed.push(filteredList[i])
  }
  //coding and coding..
  return reversed.join('')
}