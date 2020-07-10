// In a Binary Search Tree (BST), an Inorder Successor of a node is defined as 
// the node with the smallest key greater than the key of the input node (see examples below). 
// Given a node inputNode in a BST, you’re asked to write a function findInOrderSuccessor 
// that returns the Inorder Successor of inputNode. If inputNode has no Inorder Successor, return null.



function BSTSucessor(inputNode) {
    if(inputNode.right != null) {
        // return the node with minimum key in the right subtree
        return findMinkey(inputNode.right)
    }

    let ancestor = inputNode.parent;
    let child = inputNode;

    // travel up using the parent pointer until you see
    // a node which is the left child of its parent. The parent
    // of such a node is successorNode.
    while (ancestor != null && child === ancestor.right) {
        child = ancestor;
        ancestor = child.parent
    }
    return ancestor   
}

function findMinkey(inputNode) {
    while (inputNode.left != null) {
        inputNode = inputNode.left
    }

    return inputNode;
}