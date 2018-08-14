// 基本思路
// function bubbleSort(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len - 1; i++) {
//       for (let j = 0; j < len - 1 - i; j++) {
//           if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
//               var temp = arr[j+1];        // 元素交换
//               arr[j+1] = arr[j];
//               arr[j] = temp;
//           }
//       }
//   }
//   return arr;
// }


// 改进一，有可能某一趟排序后，数组中已经没有数字的交换了，代表数组已经有序了，
// 用一个 flag 来表示该趟排序时候发生交换
function bubbleSort(arr) {
  var len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let flag = true;
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
        var temp = arr[j+1];        // 元素交换
        arr[j+1] = arr[j];
        arr[j] = temp;
        flag = false;
      }
    }
    if (flag === true) {
      break;
    }
  }
  return arr;
}


// 改进二，某一趟排序后，可能某个位置后的数字没有再发生交换，那么可以记录下
// 最后发生交换的位置，下一趟比较只进行到该位置就停止
// function bubbleSort(arr) {
//   let len = arr.length;
//   let index = 0;
//   let flag = true;
//   let k = len - 1; 
//   while(flag) {
//     flag = false;
//     for (let j = 0; j < k; j++) {
//       if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
//         var temp = arr[j+1];        // 元素交换
//         arr[j+1] = arr[j];
//         arr[j] = temp;
//         flag = true;
//         index = j;
//       }
//     }
//     k = index;
//   }
//   return arr;
// }

console.time("time used");
let arr = [10, 2, 1, 7, 11, 4, 3, 8, 1, 12, 0, -1, 1, 0, 1,111,1111,11111,1111111,11111111,11111111];
console.log(bubbleSort(arr));
console.timeEnd("time used");
