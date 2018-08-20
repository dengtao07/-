function findFirstNonRepeat(arr) {
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    hashMap.set(arr[i], hashMap.has(arr[i]))
  }
  // 找到第一个值为 false 的，就代表第一个非重复数，return 就好了
  for(let [key, value] of hashMap.entries()) {
    if(value === false) {
      return key;
    }
  }
  return "全部重复";
}

let arr = [1, 1, 1, 2, 3, 3, 4, 5, 5, "a", "b", "a"];
console.log(findFirstNonRepeat(arr));