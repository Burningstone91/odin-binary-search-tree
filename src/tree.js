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

  insert(value, currNode = this.root) {
    if (currNode === null) return new Node(value);
    if (currNode.value === value) return;

    if (currNode.value < value) {
      currNode.rightChild = this.insert(value, currNode.rightChild);
    } else {
      currNode.leftChild = this.insert(value, currNode.leftChild);
    }

    return currNode;
  }

  remove(value, currNode = this.root) {
    if (currNode === null) return currNode;
    if (currNode.value > value) {
      currNode.leftChild = this.remove(value, currNode.leftChild);
    } else if (currNode.value < value) {
      currNode.rightChild = this.remove(value, currNode.rightChild);
    } else {
      if (currNode.leftChild && currNode.rightChild) {
        return currNode.rightChild || currNode.leftChild;
      }

      let succ = this.#getSuccessor(currNode.rightChild);
      currNode.value = succ.value;
      currNode.right = this.remove(succ.value, currNode.rightChild);
    }

    return currNode;
  }

  #getSuccessor(node) {
    let currNode = node;

    while (currNode.leftChild) {
      currNode = currNode.leftChild;
    }

    return currNode;
  }
}

export { Tree };
