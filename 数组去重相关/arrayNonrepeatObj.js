function nonRepeatObj(arr) {
  let obj = {};
  for(let i=0; i<arr.length; i++) {
    if(!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1; 
    }
  }
  let maxNum = 1;
  let char = '';
  for(let [key, value] of Object.entries(obj)) {
    if(value>maxNum){
      maxNum = value;
      char = key;
    }
  }
  return char;
}

let arr = [1,1,1,2,2,2,2,2,3];
console.log(nonRepeatObj(arr));