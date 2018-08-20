function bigNumsAdd(a, b) {
  let arrA = ('0' + a).split('');
  let arrB = ('0' + b).split('');
  let carry = 0;
  let result = [];
  let len = Math.max(arrA.length, arrB.length);
  let diffNum = arrA.length - arrB.length;
  if(diffNum > 0) {
    arrB = new Array(diffNum).fill('0').concat(arrB);
  } else {
    arrA = new Array(Math.abs(diffNum)).fill('0').concat(arrA);
  }
  for (let i = len-1; i >= 0; i--) {
    let temp = +arrA[i] + (+arrB[i]) + carry;
    if(temp > 10) {
      carry = 1;
      let res = (temp + '')[1];
      result.unshift(res);
    } else {
      carry = 0;
      result.unshift(temp);
    }
  }
  return result.join('').replace(/^0/, '');
}

console.log(bigNumsAdd('111111111111111111111111111111','222222222222222222222222222222'));
