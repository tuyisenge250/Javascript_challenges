function toCamelCase(str){
  return str.split("_").map((x,i) => x.split("-").map((x,j) => i === 0 && j === 0 ? x : `${x[0].toUpperCase()}${x.slice(1)}`).join("")).join("")
}
console.log(toCamelCase("hel_lo"))