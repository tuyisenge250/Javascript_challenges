// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.
var palindromeChainLength = function(n, step = 0) {
  let nString = n.toString()
  let nReverse = nString.split("").reverse().join("")
  if(n === parseInt(nReverse)){
    return step
  }else{
  step += 1
  let sum = n + parseInt(nReverse)
  return palindromeChainLength(sum, step);
  }
};
