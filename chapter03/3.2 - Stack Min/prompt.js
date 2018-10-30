/**
 * How would you design a stack, which, in addition to push and pop, has a function min which returns the minimum element?
 * Push, pop, and min should all operate in O(1) time.
 */

// Stack (LIFO)
// declare constant(?) to keep track of minimum element in the stack as elements get pushed/popped
function Stack() {
  this.top = null;
}

function Node (val, min) {
  this.val = val;
  this.next = null;
  this.min = min;
};

// add node to linked list
Stack.prototype.push = function(val) {
  if (this.top === null) {
    return this.top = new Node(val, val);
  }
  const minVal = this.top.min;
  const newNode = new Node(val, Math.min(val, minVal));
  newNode.next = this.top; 
  this.top = newNode;
};

// remove node from linked list
Stack.prototype.pop = function() {
  if (this.top === null) {
    return undefined;
  }
  const popVal = this.top.val;
  const remove = this.top;
  this.top = this.top.next;
  remove.next = null;
  return popVal;
};

// return minimum value
Stack.prototype.min = function() {
  return this.top.min;
};

// peek
Stack.prototype.peek = function() {
  return this.top.val;
};

// isEmpty
Stack.prototype.isEmpty = function() {
  return this.top === null;
};



const newStack = new Stack();
// stack returns undefined when empty
console.log(newStack.pop());
// stack should be empty
console.log(newStack.isEmpty());
// add 2 new elements to the stack 
newStack.push(1);
newStack.push(2);
// stack is no longer empty
console.log(newStack.isEmpty());
// return 2
console.log(newStack.pop());
newStack.push(6);
newStack.push(5);
// minimum value should be 1 in a stack with 1 -> 6 -> 5
console.log(newStack.min());
newStack.pop();
newStack.pop();
newStack.pop();
// stack should now be empty
console.log(newStack.isEmpty());