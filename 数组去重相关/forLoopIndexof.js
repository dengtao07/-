function forLoopIndexof(arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(result.indexOf(arr[i]) == -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

arr = [1,2,3,1,2,2,2,3,1,1,3,5,6];
console.log(forLoopIndexof(arr));