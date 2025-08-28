function changer(str) { 
  const letter = "abcdefghijklmnopqrstuvwxyz".split("")
  const vowels = "aeuio".split("")
  return str.toLowerCase().split("").map(x => letter.includes(x) ? x === 'z' ? 'a' : letter[letter.indexOf(x) + 1] : x).map(x => vowels.includes(x) ? x.toUpperCase() : x).join("")
}