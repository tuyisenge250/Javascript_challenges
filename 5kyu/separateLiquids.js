function separateLiquids(glass) {
  const dens = {  "H" : 1.36, "W" : 1.00,"A" : 0.87, "O": 0.80   }
  const de = [ "H","W","A","O"]
  const all = glass.flat().sort((a,b) => dens[a] - dens[b])
   let newAll = []
   for(let i = 0; i < all.length; i += glass[0].length){
     newAll.push(all.slice(i, i + glass[0].length))
   }
   return newAll
}