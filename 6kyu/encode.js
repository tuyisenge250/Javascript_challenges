function encode(plaintext){
  return plaintext.split(" ").map(x =>x ===" "? " ":x.slice(0,-1).split("").reverse().join("")+x.at(-1)).join(" ")
}