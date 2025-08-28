function sortTheInnerContent(words)
{
  return words.split(" ").map(x => `${x[0]}${x.length > 2 ? x.slice(1,-1).split("").sort().reverse().join(""):""}${x.length > 1 ? x.at(-1): ""}`).join(" ");
}
