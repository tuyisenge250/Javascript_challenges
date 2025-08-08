function points(games) {
  return games.reduce((sum, curr) => sum += curr.split(":")[0] > curr.split(":")[1] ? 3 : curr.split(":")[0] == curr.split(":")[1] ? 1 : 0, 0 )
}