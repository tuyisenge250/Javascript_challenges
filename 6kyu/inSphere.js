function inSphere(coords, radius) {
  return coords.reduce((sum,cur) => sum + cur**2,0) <= radius ** 2;
}