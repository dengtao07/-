function recursion(arr) {
  var result = [];
  arr.forEach(item=>{
    if(Array.isArray(item)) {
      result= result.concat(recursion(item));
    } else {
      result.push(item);
    }
  })
  return result;
}

var arr = [1,2,3,[4,[5,[6,[7,[8,[9,[10]]]]]]]];
console.log(recursion(arr));