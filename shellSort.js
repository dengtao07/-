// shellSort
function shellSort(arr) {
  for(let gap = Math.floor(arr.length/2); gap > 0; gap = Math.floor(gap/2)) {
    for(let i = gap; i < arr.length; i++) {
      let j = i;
      let temp = arr[j];
      for(; j> 0; j -= gap) {
        if(temp >= arr[j-gap]) {
          break;
        }
        arr[j] = arr[j-gap];
      }
      arr[j] = temp;
    }
  }
  return arr;
}

// example
let arr = [2,5,10,7,10,32,90,9,11,1,0,10];
alert(shellSort(arr));