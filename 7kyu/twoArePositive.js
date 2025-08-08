function twoArePositive(a, b, c) {
  return [a, b, c].filter(x => x > 0).length === 2; 
}