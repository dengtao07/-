function spread(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

var arr = [1,2,3,[4,[5,[6,[7,[8,[9,[10]]]]]]]];
console.log(spread(arr));