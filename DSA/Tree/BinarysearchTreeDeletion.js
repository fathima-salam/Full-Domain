class Tree{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    append(data){
        let newNode = new Tree(data);
        if(!this.root){
            this.root = newNode;
            return;
        }
        let current = this.root;
        while(current.next !=null){
            if(data < current.data){
                if(!current.left){
                    current.left = newNode;
                    break;
                }else{
                    current = current.left
                }
            }else{
                if(!current.right){
                    current.right = newNode;
                    return;
                }else{
                    current = current.right;
                }
            }
        }
    }
    delete(value){
        this.root = deleteNode(this.root,value);

        function deleteNode(node,value){
            if(!node){
                return null;
            }
            if(node.value < value){
                node.left = deleteNode(node.left,value)
            }else if(node.value > value){
                node.right = deleteNode(node.right,value)
            }else{
                if(!node.left && !node.right) return null;
                if(!node.left)return node.right;
                if(!node.left)return node.left;

                let minRIght = findMin(node.right);
                node.value = minRIght.value

                node.right = deleteNode(node.value,value)
            }
        }
        function findMin(node){
            while(node.left){
                node = node.left;
            }
            return node;
        }
    }

    delete(value){
        this.root = delteNode(this.root,value);
            function deleteNode(node,value){
                if(!node)return null;
                if(node.value < value){
                    node.left = deleteNode(node.value,value);
                }else if(node.value > value){
                    node.right = deleteNode(node.value,value);
                }else{
                    if(!node.left && !node.right)return null;
                    if(!node.left)return node.right;
                    if(!node.right)return node.left;
                    
                    const minRIght = findMin(node.right);
                    node.value = minRIght.value
                    node.right = deleteNode(node.value,value)
                }
            }
            function findMin(node){
                while(node.left){
                    node=node.left;
                }
                return node;
            }
    }
}

