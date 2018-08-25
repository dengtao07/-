var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var K = 2; // 输入K行
var inputs = [];
rl.on('line', function(data) {
    // 获取输入
    inputs.push(data.trim());
    if (K == inputs.length) { //
        // 处理
        var arr = inputs[1].split(' ');
        var arr = arr.map(element => {
          return parseInt(element);
        });
        for(var i = 0; i < arr.length-2; i++) {
          for(var j=i+1; j < arr.length-1; j++) {
            if(arr[i]+arr[j]==arr[arr.length-1]){
              console.log(`${i} ${j}`);
            }
          }
        }

        // 清0
        inputs.length = 0;

    }
});

// var arr =[2,2,7,11,15,9];
// for(var i = 0; i < arr.length-2; i++) {
//   for(var j=i+1; j < arr.length-1; j++) {
//     if(arr[i]+arr[j]==arr[arr.length-1]){
//       console.log(`${i} ${j}`);
//       break;
//     }
//   }
// }