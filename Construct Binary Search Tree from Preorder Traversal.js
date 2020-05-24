/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var createNode = function(value) {
    let node = new TreeNode(value);
    return node;
}
var insertNode = function(head, node) {
    if(head) {
        if(head.val > node.val) {
           if(head.left) {
                insertNode(head.left, node);
            } else {
                head.left = node;
            }
        } else if(head.val < node.val) {
            if(head.right) {
                insertNode(head.right, node);  
            } else {
                head.right = node;
            }
        }   
    } else {
        head = node;
    }
    return head;
}
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let head = null;
    for(let element of preorder) {
        let node = createNode(element);
        head = insertNode(head, node);
    }
    return head;
};
