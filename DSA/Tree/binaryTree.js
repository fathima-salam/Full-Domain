class Tree {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class binaryTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        let newNode = new Tree(data);
        if(!this.root){
            this.root = newNode;
            return;
        }
        let queue = [this.root];
        while(queue.length > 0){
            let current = queue.shift();
            if(!current.left){
                current.left = newNode
                break;
            }else{
                queue.push(current.left);
            }

            if(!current.right){
                current.right = newNode;
                break
            }else{
                queue.push(current.right);
            }
        }
    }
    inOrder(node = this.root){
        if(node){
            this.inOrder(node.left);
            console.log(node.data)
            this.inOrder(node.right);
        }
    }
    preOrder(node = this.root){
        if(node){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    postOrder(node = this.root){
        if(node){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data)
        }
    }
    levelOrder(){
        if(!this.root) return;
        let queue = [this.root];
        while(queue.length > 0){
            let current = queue.shift();
            console.log(current.data);
            if(current.left)queue.push(current.left);
        if(current.right)queue.push(current.right);
        }
        
    }
}

let tree = new binaryTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(60);

console.log("InOrder Traversal:");
tree.inOrder();

console.log("PreOrder Traversal:");
tree.preOrder();

console.log("PostOrder Traversal:");
tree.postOrder();

console.log("LevelOrder Traversal:");
tree.levelOrder();