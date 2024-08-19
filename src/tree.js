import { removeDuplicates } from "./utilities";

class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(array) {
    const sortedArray = array.sort();
    const cleanArray = removeDuplicates(sortedArray);

    return cleanArray;
  }
}

export { Tree };
