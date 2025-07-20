function solution(string) {
  const arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return string.split("").map(x => arr.includes(x)?` ${x}`: x).join("")
}