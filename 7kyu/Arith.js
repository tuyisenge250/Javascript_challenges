class Arith{
  #value = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty"
];
  constructor(first){
    this.first = first
  }
  add(second){
    return this.#value[this.#value.indexOf(second) + this.#value.indexOf(this.first)]
  }
}
