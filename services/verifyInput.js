const chalk = require('chalk');

function verifyStack(stack){
    const regEx = /^([-0-9+*/]+ )*([-0-9+*/]+)$/;
    const isValid = regEx.test(stack);
    if(isValid){
      return true;
    } else{
      console.log(chalk.red.bold(`Invalid input. Input can only contain number values or operations + - * /, ${stack}`))
      return false;
    }
}

module.exports = verifyStack;