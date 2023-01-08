/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    if (!root.left && !root.right) return 1

    return depth(root, 1)
};

var depth = function(node, d) {
    if(!node?.left && !node?.right) return d
    return Math.max(depth(node?.left, d+1), depth(node?.right, d+1)) 
}
