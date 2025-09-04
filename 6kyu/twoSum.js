function twoSum(numbers, target) {
    return numbers.map((x,i,arr) => [...arr.slice(0,i),...arr.slice(i+1)].map((y,j,a) => y + x === target ? [i,arr.lastIndexOf(y)] : 0)).flat(1).filter(x => x !== 0)[0];
}