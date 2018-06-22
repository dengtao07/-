let num = 0;
function fib(n) {
  num++;
  let memory = new Array(n+1);
  memory[0] = 0;
  memory[1] = 1;
  for(let i = 2; i <= n; i++) {
    memory[i] = memory[i-1] + memory[i-2];  
  }
  return memory[n];
}

console.time("timer");
console.log(`result is: ${fib(40)}`);
console.log(`fib() runned ${num} times`);
console.timeEnd("timer");