// The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,

// hammingWeight(10) // 1010  => 2
// hammingWeight(21) // 10101 => 3
// The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)

// ;)

function hammingWeight(x){
  let remender = []
  let i = x
  while(i){
    console.log(i)
    remender.push(i % 2)
    i = Math.floor( i / 2)
  }
  console.log(remender)
  return remender.filter(x => x == 1).length
}