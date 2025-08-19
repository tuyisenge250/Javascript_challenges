function x(n) {
    if(n === 1){
      return [[1]]
    }
    let mid = Math.ceil(n/2) === n ? n / 2 : Math.floor(n/2)
    let arr = (new Array(n)).fill(0).map(x => (new Array(n)).fill(0)).map((x,i) => x.map((y,index) => index === i ? 1 : 0))
    console.log(arr)
    if(n % 2 === 0){
      return arr.map((x,i) =>i < mid ? [...x.slice(0,mid),...x.slice(0,mid).reverse()] : [...x.slice(mid).reverse(),...x.slice(mid)])
    }else{
      return arr.map((x,i) => i < mid ? [...x.slice(0,mid), 0 ,...x.slice(0,mid).reverse()] : (i > mid) ?  [...x.slice(mid+1).reverse(),0,...x.slice(mid+1)] : x)
    }
}