#! /usr/bin/env node
const calculator = require('./commands/calculator')
const clear = require('./commands/clear')
const verifyInput = require('./services/verifyInput')
const argvs = process.argv
const yargs = require('yargs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    
rl.setPrompt('> ');
rl.prompt();


rl.on('line', function (input) {
    //Determine if quitting application
    if(input === 'q') {
        clear();
        return rl.close();
    }
    //Determine if characters are all valid
    const isValid = verifyInput(input);
    //Run through calculator
    isValid && calculator(input);

    rl.setPrompt('> ');
    rl.prompt();

})


