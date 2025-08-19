function toUnderscore(string) {
    if(typeof string !== "string"){
        return `${string}`
    }
    const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    return `${string[0].toLowerCase()}${string.slice(1).split("").map(x => capital.includes(x) ? `_${x.toLowerCase()}` : x).join("")}`
}