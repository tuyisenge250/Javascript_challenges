function cardGame(card1, card2, trump) {
  const dec = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
  const sign1 = card1 !== "joker" ? `${card1.slice(0,-1)} ${card1.slice(-1)}`.split(" ") : ""
  const sign2 = card1 !== "joker" ? `${card2.slice(0,-1)} ${card2.slice(-1)}`.split(" ") : ""
  if(card1 === card2){
    return "Someone cheats."
  }else if(card1 === "joker" || card2 === "joker"){
    return card1 === "joker" ? "The first card won." :  "The second card won."
  }else if(sign1[1] == sign2[1]){
    return dec.indexOf(sign1[0]) > dec.indexOf(sign2[0]) ? "The first card won.": "The second card won."
  }else if(sign1[1] === trump){
    return "The first card won."
  }else if(sign2[1] === trump){
    return  "The second card won."
  }else{
    return "Let us play again."
  }
}