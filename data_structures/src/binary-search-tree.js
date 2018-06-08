class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    let foo = this;
    //Set this to foo may or may not be necessary
    cb(foo.value);
    if(foo.left) {
      foo.left.depthFirstForEach(cb);
    }
    if(foo.right) {
      foo.right.depthFirstForEach(cb);
    }    
  }

  breadthFirstForEach(cb) {
  let queue = [this];
  for(let i = 0; i < queue.length; i++) {
    let tree = queue[i];
    //Set the iterated this to tree so it makes more sense with what actions are occuring;
    if(tree.left) queue.push(tree.left);
    //LEFT HAS TO BE FIRST OR ELSE THE ARRAY IS MESSED UP
    if(tree.right) queue.push(tree.right);
    cb(tree.value);
  }

  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;