var uniqueInOrder=function(iterable){
  let un_arr = []
  let it = typeof iterable === 'string' ? iterable.split("") : iterable
  it.forEach((x,index) => (index === 0)? un_arr.push(x) : (x !== un_arr[un_arr.length - 1]) ? un_arr.push(x) : "")
  return un_arr
}