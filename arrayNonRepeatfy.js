function arrayNonRepeatfy(arr) {
  let hashMap = new Map();
  let result = new Array();
  for (let i = 0; i < arr.length; i++) {
    if(hashMap.has(arr[i])) {
      hashMap.set(arr[i], true);
    } else {
      hashMap.set(arr[i], false);
      result.push(arr[i]);
    }
  } 
  return result;
}

let arr = [1, 1, 1, 2, 3, 3, 4, 5, 5, "a", "b", "a"];
console.log(arrayNonRepeatfy(arr));