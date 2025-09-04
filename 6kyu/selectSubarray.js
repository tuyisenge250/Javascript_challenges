function selectSubarray(arr) {
     const index = arr.map((x,i,a) => [...a.slice(0,i), ...a.slice(i+1)]).map(x =>  Math.abs(x.reduce((sum,cur)=> sum * cur ,1) / x.reduce((sum,cur) => sum + cur))).reduce((val,sum,i,ar) => val = ar[i] < ar[val] ? i : val, 0)
     return [index, arr[index]]
}