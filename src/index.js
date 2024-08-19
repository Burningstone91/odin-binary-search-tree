import "./styles.css";
import { Tree } from "./tree.js";
import { prettyPrint } from "./utilities.js";

const testArray = [5, 4, 2, 8, 6, 4];
const testTree = new Tree(testArray);

console.log(testTree);

prettyPrint(testTree.root);
