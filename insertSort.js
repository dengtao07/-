// swap
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// insertSort
function insertSort(arr) {
  let length = arr.length;

  for(let i = 0; i<length; i++) {
    let minIndex = i;
    for(let j= i+1; j<length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j; 
      }
    }
    swap(arr, i , minIndex);
  }
  return arr;
}
// example
let arr = [2,5,10,7,10,32,90,9,11,1,0,10]
alert(insertSort(arr));