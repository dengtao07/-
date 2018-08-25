function sortNonrepeat(arr) {
  arr.sort((a, b) => a - b);
  for(let i = 0; i < arr.length-1; i++) {
    if(arr[i] == arr[i+1]){
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

arr = [1,2,3,1,2,2,2,3,1,1,3,5,6,1,2,7,8,9];
console.log(sortNonrepeat(arr));