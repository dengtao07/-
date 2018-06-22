// 直接使用递归
let num = 0;    // 用来记录fib函数执行次数，执行一次加一
function fib(n) {
  num ++;
  if(n === 0) {
    return 0;
  }
  if(n === 1) {
    return 1;
  }
  return fib(n-1) + fib(n-2);
}

console.time("time used");
console.log(`result is: ${fib(40)}`);
console.log(`fib() runned ${num} times`);
console.timeEnd("time used");

