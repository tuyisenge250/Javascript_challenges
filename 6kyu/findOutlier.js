function findOutlier(integers){
  const odd = integers.filter(x => x % 2 !== 0)
  const even = integers.filter(x => x % 2 === 0)
  return odd.length === 1 ? odd[0] : even[0]
}