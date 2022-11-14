const conf = new (require('conf'))()
const chalk = require('chalk');
const clear = require('./clear');
const handleCalculation = require('../services/calculator')

async function calculator(tokens){
      let calculation = conf.get('calculation') || [];
      const newToken = tokens.trim().split(' ');
      calculation = [...calculation, ...newToken];
      handleCalculation(calculation) 
      conf.set('calculation', calculation);
}


module.exports = calculator;