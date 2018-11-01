/**
 * Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.
 */

function BST (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// [1, 2, 3, 4]
//      2
//    1   3
//          4
// [1, 2, 3, 4, 5, 6]
//      3
//    2   5
//   1   4  6 

function minimalTree (arr) {
  if (arr.length === 0) return undefined;

  function buildTree (tree) {
    if (tree === null) {}
  }
}