class TrieNode{
    constructor(){
        this.children = {},
        this.endOfNode = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let node = this.root;
        for(let char of word){
            if(!this.children[char]){
                this.children[char] = new TrieNode();   
            }
            node = node.children[char]
        }
        node.endOfNode =true
    }
}