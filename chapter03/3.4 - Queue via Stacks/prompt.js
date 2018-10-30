/**
 * Implement a MyQueue class which implements a queue using two stacks.
 */

// class MyQueue {
//   constructor() {
//     this.Stack1 = [];
//     this.Stack2 = [];
//   }

//   enqueue(val) {
//     this.Stack1.push(val);
//   }

//   dequeue() {
//     if (this.Stack2.length === 0) {
//       // if stack2 is empty, move entirety of stack1 into stack2
//       while (this.Stack1.length > 1) {
//         let pop = this.Stack1.pop();
//         this.Stack2.push(pop);
//       }
//       return this.Stack1.pop();
//     }
//     return this.Stack2.pop();
//   }
// }

function MyQueue() {
  this.Stack1 = [];
  this.Stack2 = [];
}

MyQueue.prototype.enqueue = function(val) {
  this.Stack1.push(val);
}

MyQueue.prototype.dequeue = function() {
  if (this.Stack2.length === 0) {
    while (this.Stack1.length) {
      this.Stack2.push(this.Stack1.pop());
    }
    return this.Stack2.pop();
  }
  return this.Stack2.pop();
}

MyQueue.prototype.peek = function() {
  if (!this.Stack1.length && !this.Stack2.length) return undefined;
  if (!this.Stack2.length) {
    while(this.Stack1.length) {
      this.Stack2.push(this.Stack1.pop());
    }
    return this.Stack2[this.Stack2.length - 1];
  }
  return this.Stack2[this.Stack2.length - 1];
}

MyQueue.prototype.isEmpty = function() {
  return (!this.Stack1.length && !this.Stack2.length);
}

const queue = new MyQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.dequeue());