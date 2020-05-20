/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var kthSmallest = function(root, k) {
    let array = [];
    inorder(root);
    return array[k - 1]
    
    function inorder(root){
        if(!root){
            return
        }
        inorder(root.left)
        array.push(root.val)
        inorder(root.right)
    }
};
