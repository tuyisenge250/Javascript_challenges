// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
    const o = str.toLowerCase().split("").filter(x => x === 'o')
    const x= str.toLowerCase().split("").filter(x => x === 'x')
 
    return o.length === x.length
}