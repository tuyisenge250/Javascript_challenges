function duplicateEncode(word){
    return word.toLowerCase().split("").map((x,i, arr) => arr.lastIndexOf(x) === i && arr.indexOf(x) === i ? "(" : ")").join("");
}