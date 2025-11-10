class Node{
    constructor(data){
        this.data= data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    append(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next !=null){
            current =current.next;
        }
        current.next = newNode;
    }
    reverse(){
        let current = this.head;
        let prev = null;
        let next = null;
        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    print(){
        if(!this.head){
            return 'no list found'
        }
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();

linkedList.append(5);
linkedList.append(4);
linkedList.append(3);
linkedList.append(2);
linkedList.append(1);
linkedList.append(0);
console.log('before reverse')
linkedList.print();
console.log('after reverse')
linkedList.reverse();
linkedList.print();