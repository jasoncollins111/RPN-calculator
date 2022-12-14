## Description 
This application is a Reverse Polish Notation calculator. From Wikipedia, Reverse Polish Notation is a mathematical notation in which operators follow their operands, in contrast to Polish notation (PN), in which operators precede their operands. It does not need any parentheses as long as each operator has a fixed number of operands. The description "Polish" refers to the nationality of logician Jan Łukasiewicz, who invented Polish notation in 1924.

## Overview
This is a Node CLI application able to take numbers and operators for addition, subtraction, multiplication, and division i.e.(+ - * /). Each statement is run through a verication process to determine if the all the elements in a statement are valid. If so, the statement is pushed to a stack and then a value is calculated based on that stack of elements. As far as architecture, the main index.js acts as the high level instructions for the application while the functionality is handled by commands which depend on services to carry out the commands. 

## Tradeoffs
If I had more time I would have implemented testing using Jest or Mocha. And possibly some sort of caching or database to quickly recall calculations, especially for larger calculations this would be useful. 


## Installation
sudo npm install -g rpn-abacus

## Usage
Run command `rpnc` in the terminal to begin a calculation. Enter a mix of numbers or operations that work within the RPN system. 

Hit `enter` to evaluate. 
Type `clear` to begin a new calculation
Type `q` to quit the calculator

operators:
    +:adds last two stack elements
    -:subtracts element 1 from element 2
    x:multiplies last two stack elements (* is ok but need escape in bash)
    /:divides element 2 by element 1

