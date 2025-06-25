function oddOrEven(array) {
   if(array.length === 0){
     return "even"
   }
  let sum = array.reduce((su,cur) => su + cur)
  
  return sum % 2 === 0 ? "even" : "odd"
  
}