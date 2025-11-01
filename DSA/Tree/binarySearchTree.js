class Tree {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        let newNode = new Tree(data);
        if(!this.root){
            this.root = newNode;
            return;
        }
        let current = this.root;
        while(current){
            if(data < current.data){
                if(!current.left){
                    current.left= newNode
                    break;
                }else{
                    current = current.left
                }
            }else{
                if(!current.right){
                    current.right = newNode;
                    break;
                }else{
                    current = current.right;
                }
            }
        }
    }
}

let bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log(JSON.stringify(bst, null, 2));