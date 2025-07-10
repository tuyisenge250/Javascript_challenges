function getCount(str) {
  //take string and covert it into array by split()
  //use filter to return any array of include in vowels array 
  //i check if element is vowels use includes()
  //determine length of array returned
  return str.split("").filter(x => ['a','e','i','o','u'].includes(x)).length;
}