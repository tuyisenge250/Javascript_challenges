class WordDictionary {
  #words = []
    addWord(word) {
      this.#words.push(word)
    }
    search(word) {
      return this.#words.filter(x => x.length === word.length ? x.split("").every((y,i,a) => y === word[i] || word[i] === '.') ? true : false : false).length > 0
    }
}