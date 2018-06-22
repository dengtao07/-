// 记忆化搜索，记录每次计算的结果
let num = 0; // 用来记录fib函数执行次数，执行一次加一
let totalnum = 40;
let memory = new Array(totalnum+1).fill(-1);
function fib(n) {
  num++;
  if(n === 0) {
    return 0;
  }
  if(n === 1) {
    return 1;
  }
  if(memory[n] === -1) {
    memory[n] = fib(n-1) + fib(n-2);  // 如果前面已经得到，直接使用
  } 
  return memory[n];
}

console.time("timer");
console.log(`result is: ${fib(totalnum)}`);
console.log(`fib() runned ${num} times`);
console.timeEnd("timer");