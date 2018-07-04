function binarySearch(arr, num) {
  const length = arr.length;
  let left = 0;
  let right = length - 1;  // 在[l...r]的前闭后闭的区间查找
  while(left <= right) {   // 当l===r时，只有一个元素，认识一个有效数组   
    let mid = Math.floor((left+right)/2);
    if(arr[mid] === num) {
      console.log(`the index of ${num} is ${mid}`);
      return mid;
    } else if(arr[mid] < num) {
      left = mid+1;
    } else{
      right = mid-1;
    }
  }
  console.log(`can not find ${num}`);
  return false;
}
let arr1 = [1,4,6,9,10,15,16,17,18];
binarySearch(arr1, 18);