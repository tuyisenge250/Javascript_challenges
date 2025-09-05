function convertRecipe(recipe){
  return recipe.split(" ").map((x,i,arr) => x === "tbsp" ? `tbsp (${Math.ceil(eval(arr[i-1]) * 15)}g)` : x === "tsp" ? `tsp (${Math.ceil(eval(arr[i-1]) * 5)}g)` : x).join(" ")
}