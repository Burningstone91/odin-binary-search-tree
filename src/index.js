import "./styles.css";
import { Tree } from "./tree.js";
import { prettyPrint } from "./utilities.js";

function randomNumbers(size) {
  randomNumbers = [];
  for (let i = 0; i < size; i++) {
    randomNumbers.push(Math.round(Math.random() * 100));
  }
  return randomNumbers;
}

const testTree = new Tree(randomNumbers(20));

console.log(testTree.isBalanced());

console.log(testTree.levelOrder((value) => value));
console.log(testTree.inOrder((value) => value));
console.log(testTree.preOrder((value) => value));
console.log(testTree.postOrder((value) => value));

testTree.insert(432);
testTree.insert(291);
testTree.insert(675);

console.log(testTree.isBalanced());

testTree.rebalance();

console.log(testTree.isBalanced());

console.log(testTree.levelOrder((value) => value));
console.log(testTree.inOrder((value) => value));
console.log(testTree.preOrder((value) => value));
console.log(testTree.postOrder((value) => value));
