// insertSort
function insertSort(arr) {
  let length = arr.length;
  for(let i = 1; i < length; i++) {
    let temp = arr[i];
    for(let j = i; j > 0; j--) {
      if(arr[j] >= arr[j-1]) {
        break;      // 当前考察的数大于前一个数，证明有序，退出循环
      }
      arr[j] = arr[j-1]; // 将前一个数复制到后一个数上
    }
    arr[j] = temp;  // 找到考察的数应处于的位置
  }
  return arr;
}

// example
let arr = [2,5,10,7,10,32,90,9,11,1,0,10]
alert(insertSort(arr));