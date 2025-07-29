function same(aArr, bArr)
{
  return JSON.stringify(aArr.flat().sort((a,b) => a -b)) === JSON.stringify(bArr.flat().sort((a,b) => a -b));
}