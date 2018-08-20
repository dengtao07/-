function arrayNonRepeatfy(arr) {
  let hashMap = new Map();
  let result = new Array();  // 数组用于返回结果
  for (let i = 0; i < arr.length; i++) {
    if(hashMap.has(arr[i])) { // 判断 hashMap 中是否已有该 key 值
      hashMap.set(arr[i], true);  // 后面的true 代表该 key 值在原始数组中重复了，false反之
    } else {  // 如果 hashMap 中没有该 key 值，添加
      hashMap.set(arr[i], false);  
      result.push(arr[i]);
    }
  } 
  return result;
}

let arr = [1, 1, 1, 2, 3, 3, 4, 5, 5, "a", "b", "a"];
console.log(arrayNonRepeatfy(arr));