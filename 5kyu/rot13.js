function rot13(message){
  const lower = "abcdefghijklmnopqrstuvwxyz".split("")
  const lower13 = "nopqrstuvwxyzabcdefghijklm".split("")
  const upper =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const upper13 ="NOPQRSTUVWXYZABCDEFGHIJKLM".split("")
  return message.split("").map(x => lower.includes(x) ? lower13[lower.indexOf(x)] : upper.includes(x) ? upper13[upper.indexOf(x)] : x).join("")
}