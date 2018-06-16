// 将i结点以下的堆整理为大顶堆
function adjustHeap(A, i, length) {
  let temp = A[i];
  for(let j = 2*i+1; j<length; j = 2*j+1) {
    if(j+1 < length && A[j] < A[j+1]) {
      j++;
    }
    if(temp < A[j]) {
      A[i] = A[j];
      i = j;
    } else {
      break;
    }
  }
  A[i] = temp;
}
// 交换
function swap(A, i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp; 
}
// 堆排序
function heapSort(A) {
  // 初始化大顶堆
  for(let i = Math.floor(A.length/2-1); i>=0; i--) {
    adjustHeap(A, i, A.length);
  }
  // 排序
  for(let i = Math.floor(A.length-1); i>0; i--) {
    swap(A, 0, i);
    adjustHeap(A, 0, i);
  }
  return A;
}

let Arr = [4, 6, 8, 5, 9,1,2,5,3,2];
alert(heapSort(Arr));
