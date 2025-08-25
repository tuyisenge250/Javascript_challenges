function wordCount(s) {
  const letters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"
];
  const unArrowed = ["a", "the", "on", "at", "of", "upon", "in", "as"]
  return s.split("").map(x => letters.includes(x.toLowerCase()) ? x : "_").join("").split("_").filter(x => x !== "" && !unArrowed.includes(x.toLowerCase())).length
}
