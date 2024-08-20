import "./styles.css";
import { Tree } from "./tree.js";
import { prettyPrint } from "./utilities.js";

const testArray = [5, 4, 2, 8, 6, 4];
const testTree = new Tree(testArray);

prettyPrint(testTree.root);

testTree.insert(14);
testTree.insert(1);

prettyPrint(testTree.root);

testTree.remove(8);

prettyPrint(testTree.root);

console.log(testTree.find(4));

function double(value) {
  return value * 2;
}
console.log(testTree.levelOrder(double));
