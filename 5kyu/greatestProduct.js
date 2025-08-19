function greatestProduct(input) {
 return input.split("").map((x,i,a) => a.slice(i, (i+5))).filter(x => x.length=== 5).map(x => x.reduce((sum,cur) => sum * cur, 1)).sort((a,b) => b - a)[0]
}
