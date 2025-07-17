function digPow(n, p){
  const sol = n.toString().split("").map((x,i) => (+x) ** (p+i)).reduce((sum,x) => sum += x)
  return (sol/n) === Math.floor(sol/n) ? (sol/n) : -1
}
