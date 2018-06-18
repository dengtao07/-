// 交换元素
function swap(arr, i , j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp; 
}

// 快排
function quickSort(arr, i, j) {
  if(i < j) {
    let left = i;
    let right = j;
    let pivot = arr[left];
    while(i < j) {
      while(arr[j] >= pivot && i < j) {
        j--;
      }
      if(i < j) {
        swap(arr, i , j);
        i++;
      }
      while(arr[i] <= pivot && i < j) {
        i++;
      }
      if(i < j) {
        swap(arr, i , j);
        j--;
      }
    }
    arr[i] = pivot;
    quickSort(arr, left, i-1);
    quickSort(arr, i+1, right);
    return arr;
  }
}

// example
let arr = [2, 10, 4, 1, 0, 9, 5 ,2];
alert(quickSort(arr, 0 , arr.length-1));
