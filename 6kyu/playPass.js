function playPass(s, n) {
  let str = "abcdefghijklmnopqrstuvwxyz".split("")
  let shift = (val) => n + val > 25 ? n + val - 26 : n + val
  return s.toLowerCase().split("").map(x => str.includes(x) ? str.at(shift(str.indexOf(x))) : x === " "? " " :!isNaN(+x)?(9 - +x).toString():x).map((x,i) => i % 2 === 0 ? x.toUpperCase() : x).reverse().join("")
}