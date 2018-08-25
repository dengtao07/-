function twoForLoop(arr) {
  if(arr.length == 0) {
    return false;
  }
  let result = [arr[0]];
  for(let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let flag = 0;
    for(var j = 0; j < result.length; j++) {
      if(temp == result[j]) {
        flag = 1;
        break;
      }
    }
    if(flag == 0) {
      result.push(temp);
    } 
  }
  return result;
}

arr = [1,2,3,1,2,2,2,3,1,1,3,5,6];
console.log(twoForLoop(arr));
