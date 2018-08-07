function findFirstNonRepeat(arr) {
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if(hashMap.has(arr[i])) {
      hashMap.set(arr[i], true);
    } else {
      hashMap.set(arr[i], false);
    }
  }
  for(let [key, value] of hashMap.entries()) {
    if(value === false) {
      return key;
    }
  }
  return "全部重复";
}

let arr = [1, 1, 1, 2, 3, 3, 4, 5, 5, "a", "b", "a"];
console.log(findFirstNonRepeat(arr));