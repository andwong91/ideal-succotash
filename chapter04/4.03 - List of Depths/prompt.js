/**
 * Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth
 * (e.g., if you have a tree with depth D, you'll have D linked lists).
 */

const BST = require('../util/BST');
const Queue = require('../util/Queue');

function LinkedList () {
  this.head = null;
  this.tail = null;
}

function Node (value) {
  this.value = value;
  this.next = null;
}

// depth first
// function linkedListOfDepths (tree, nodeDepth = [], depth = 0) {
//   function recurseTree (tree) {
//     if (tree === null) return undefined;
//     linkedListOfDepths(tree.left, nodeDepth, depth + 1);
//     if (!nodeDepth[depth]) {
//       nodeDepth[depth] = new LinkedList();
//       const newNode = new Node(tree.value);
//       nodeDepth[depth].head = newNode;
//       nodeDepth[depth].tail = newNode;
//     } else {
//       const newNode = new Node(tree.value);
//       nodeDepth[depth].tail.next = newNode;
//       nodeDepth[depth].tail = newNode;
//     }
//     linkedListOfDepths(tree.right, nodeDepth, depth + 1);
//   }
//   recurseTree(tree, nodeDepth, depth);
//   return nodeDepth;
// }

// breadth first
function linkedListOfDepths (tree) {
  if (tree === null) return undefined;
  const queue = new Queue();
  const nodeDepth = [];
  let node;
  queue.add(tree);
  while (!queue.isEmpty()) {
    node = queue.remove();
    
    if (node.left) queue.add(node.left);
    if (node.right) queue.add(node.right);
  }  
  return nodeDepth;
}

const tree = new BST(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

console.log(linkedListOfDepths(tree));