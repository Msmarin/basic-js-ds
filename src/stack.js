const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 const stack = new Stack();  
class Stack {
  push(element) {
  stack.push(element);  
  }

  pop() {
while(stack.length){
let item =stack.pop();
}
return 1;    
  }

  peek() {
    
  }
}

module.exports = {
  Stack
};
