function filterIndexof(arr) {
  let result = arr.filter(function(val, index){
    return arr.indexOf(val) === index;
  });
  return result;
}

arr = [1,2,3,1,2,2,2,3,1,1,3,5,6];
console.log(filterIndexof(arr));