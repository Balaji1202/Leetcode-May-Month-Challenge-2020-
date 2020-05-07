/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var findCousin = function(node, value) {
    if(!node) {
       return null;
    } else if(node.val === value) {
       return node;
    } else {
        return findCousin(node.left, value) || findCousin(node.right, value);
    }
}

var setDepthAndParent = function(node, depth, parentVal) {
  if (node === null) {
    return;
  } else {
    node.depth = depth;
    node.parentVal = parentVal
  }
  setDepthAndParent(node.left, depth + 1, node.val);
  setDepthAndParent(node.right, depth + 1, node.val);
}

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

var isCousins = function(root, x, y) {
    setDepthAndParent(root, 0, null);
    let relationX = findCousin(root, x);
    let relationY = findCousin(root, y);
    if(relationX && relationY) {
        if((relationX.depth === relationY.depth) && (relationX.parentVal !== relationY.parentVal)) {
            return true;
        } else {
            return false;
        }
    }
    return false;
};
