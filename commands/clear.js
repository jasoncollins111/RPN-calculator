const conf = new (require('conf'))()
const chalk = require('chalk');

function clear() {
    conf.set('calculation', []);
    console.log(chalk.blue.bold('calculator cleared'));
}

module.exports = clear;
