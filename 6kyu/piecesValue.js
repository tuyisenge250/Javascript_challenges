function piecesValue(arr, s) {
  const st = s === "white" ? "w" : "b"
  return arr.map(x => x.filter(y => y[0] === st)).filter(x => x.length > 0).reduce((sum, cur) => sum += cur.reduce((s,c) => s += c.split("-")[1] === "king" ? 0 : +hash[c.split("-")[1]],0), 0);
}