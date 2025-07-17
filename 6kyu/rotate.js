function rotate(array, n) {
  n = (n <= 5 && n >= -5) ? n : n % array.length
  return [...array.slice(-n), ...array.slice(0,-n)]
}