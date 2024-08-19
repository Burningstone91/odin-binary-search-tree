import { removeDuplicates } from "./utilities";
import { Node } from "./node";

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const sortedArray = array.sort();
    const cleanArray = removeDuplicates(sortedArray);

    const mid = Math.floor(cleanArray.length / 2);
    const node = new Node(cleanArray[mid]);
    node.leftChild = this.buildTree(cleanArray.slice(0, mid));
    node.rightChild = this.buildTree(cleanArray.slice(mid + 1));

    return node;
  }
}

export { Tree };
