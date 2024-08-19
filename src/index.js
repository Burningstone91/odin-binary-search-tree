import "./styles.css";
import { Node } from "./node.js";
import { Tree } from "./tree.js";

const testNode = new Node(2, "left", "right");
console.log(testNode);

const testTree = new Tree();
const testArray = [5, 4, 2, 8, 6, 4];
console.log(testTree);
console.log(testArray);
console.log(testTree.buildTree(testArray));
