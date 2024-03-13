/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root){
      return 0
    }

    let total = this.root.val;

    const recursiveSum = function(node){
      for(let child of node.children){
        total += child.val;
        if(child.children.length > 0){
          recursiveSum(child);
        }
      }
    }
    recursiveSum(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root){
      return 0;
    }

    let total = 0;
    if(this.root.val % 2 === 0){
      total = 1;
    }

    const recursiveEven = function(node){
      for(let child of node.children){
        if(child.val % 2 === 0){
          total++;
        }
        if(child.children.length > 0){
          recursiveEven(child);
        }
      }
    }
    recursiveEven(this.root);
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root){
      return 0;
    }

    let total = 0;
    if(this.root.val > lowerBound){
      total = 1;
    }

    const recursiveGreater = function(node){
      for(let child of node.children){
        if(child.val > lowerBound){
          total++;
        }
        if(child.children.length > 0){
          recursiveGreater(child);
        }
      }
    }
    recursiveGreater(this.root);
    return total;
  }
}

module.exports = { Tree, TreeNode };
