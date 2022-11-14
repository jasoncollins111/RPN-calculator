const chalk = require('chalk');
const clear = require('../commands/clear');


function handleCalculation(calculation){
    const ops = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => ~~(a / b)
      };
    
      const stack = [];
    
      for (let n of calculation) {
        if (ops[n] != null) {
          const b = stack.pop();
          const a = stack.pop();
          stack.push(ops[n](a, b));
        } else {
          stack.push(Number(n));
        }
      }

      if(!stack[stack.length-1]){
        console.log(chalk.red.bold('Something went wrong please try your calculation again.'));
        return clear();
      }

      if(stack.length > 1){
        return console.log(chalk.green.bold(stack[stack.length -1]));  
      };

      console.log(chalk.green.bold(stack[0]));
}

module.exports = handleCalculation;