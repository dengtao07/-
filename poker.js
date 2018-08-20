let obj = {
  'A': 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  'T': 10,
  'J': 11,
  'Q': 12,
  'K': 13
}

function poker(str) {
  let arrTemp = str.split('');
  let arr = arrTemp.map((item) => {
    return obj[item];
  })
  arr = arr.sort((a, b)=>a-b);
  let arr1 = new Set(arr);
}
var arr = '8K67A65K27T59K346AK2'
console.log(poker(arr))
