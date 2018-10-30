/**
 * Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack,
 * but you may not copy the elements into any other data structure (such as an array). The stack supports the following
 * operations: push, pop, peek, and isEmpty.
 */

// [5, 15, 3, 11, 10] -> [-1, 0, 3, 5, 10]
// [5, 15, 3, 11, 10], []
// [5, 15, 3, 11], [10]
// [5, 15, 3], [11] -> 10
// [5, 15, 3], [11, 10]
// [5, 15], [11, 10, 3]
// [5], [11, 10, 3] <-- 15

const Stack = require('../util/Stack');
const Node = require('../util/LinkedList');

const sortStack = (stack) => {
  // return undefined if the stack is empty
  if (stack.isEmpty()) return undefined;
  // define a new stack
  const tempStack = new Stack();
  // declare variable to hold larger number from tempStack
  let holdElement;
  // loop while the original stack has elements
  while (!stack.isEmpty()) {
    // push first element into tempStack if it's empty
    if (tempStack.isEmpty()) tempStack.push(stack.pop());
    // check if top element in tempStack is bigger than original stack
    if (tempStack.peek() < stack.peek()) {
      holdElement = tempStack.pop();
      tempStack.push(stack.pop());
      tempStack.push(holdElement);
    } else {
      
    }
  }
  return tempStack;
};