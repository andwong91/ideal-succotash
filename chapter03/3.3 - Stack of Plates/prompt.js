/**
 * Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely
 * start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
 * SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same
 * values as it would if there were just a single stack).
 * 
 * FOLLOW UP:
 * Implement a function popAt(index) which performs a pop operation on a specific sub-stack.
 */

function LinkedList(val) {
  this.val = val;
  this.next = null;
}

class SetOfStacks {
  constructor(limit) {
    this.stacks = [];
    this.capacity = limit;
  }

  push(val) {
    let currStack = this.stacks[this.totalStacks];
    if (currStack === undefined || currStack.stackHeight === this.stackLimit) {
      currStack = new Stack();
      currStack.top = new LinkedList(val);
      currStack.stackHeight++;
    } else {
      // define a new node
      const newNode = new LinkedList(val);
      // set newNode.next to currStack.top
      newNode.next = currStack.top;
      // set currNode.top to be the new node
      currStack.top = newNode;
      // increment stack height
      currStack.stackHeight++;
    }
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.stackHeight = 0;
  }
}

const stacks = new SetOfStacks();
stacks.push(1);
console.log(stacks.stacks);