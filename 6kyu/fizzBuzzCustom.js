let fizzBuzzCustom = function(stringOne = "Fizz", stringTwo = "Buzz", numOne = 3, numTwo = 5) {
  return Array.from({length: 100}, (_,i) => (i + 1) % numOne === 0 ? (i + 1) % numTwo === 0 ? `${stringOne}${stringTwo}` : stringOne : (i + 1) % numTwo === 0 ? stringTwo : (i + 1))
};