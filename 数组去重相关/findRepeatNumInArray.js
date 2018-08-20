function findRepeatNumInArray(arr) {
  let hashMap = new Map();
  let result = new Array();
  for (let i = 0; i < arr.length; i++) {
    hashMap.set(arr[i], hashMap.has(arr[i]))
  }
  // 得到 hashMap 后，对其进行遍历，值为 true，对应的键就是重复的数
  for(let [key, value] of hashMap.entries()) { 
    if(value === true) {
      result.push(key);
    }
  }
  return result; 
}

let arr = [1, 1, 1, 2, 3, 3, 4, 5, 5, "a", "b", "a"];
console.log(findRepeatNumInArray(arr));