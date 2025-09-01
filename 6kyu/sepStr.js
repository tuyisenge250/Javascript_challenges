function sepStr(str) {
  const longWord = str.split(" ").reduce((len, word) => len = word.length > len ? word.length : len, 0)
  const len = str.split(" ").length
  const arr = [... new Array(longWord)].map(x => [... new Array(len)].fill(""))
  str.split(" ").forEach((x,i) => x.split("").forEach((y,j) => arr[j][i] = y ))
  return arr;
}