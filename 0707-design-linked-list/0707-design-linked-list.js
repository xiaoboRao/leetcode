class Node {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

var MyLinkedList = function() {
    this._size = 0
    this._head = null
    this._tail = null
};

MyLinkedList.prototype.getNode = function(index) {
    if(index < 0 || index >= this._size) return null;
    let cur = new Node(0, this._head);
    // 0 -> head
    while(index-- >= 0) {
        cur = cur.next;
    }
    return cur;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this._size) {
        return -1
    }
    return this.getNode(index).val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let vnode = new Node(0, this._head)
    let newNode = new Node(val, null)
    newNode.next = vnode.next
    vnode.next = newNode
    this._head = newNode
    this._size += 1
    if(this._size === 1) this._tail = newNode
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val, null)
    if(this._tail) {
        this._tail.next = newNode
    } else {
        this._head = newNode
    }
    this._tail  = newNode
    this._size += 1
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index <= 0) {
        this.addAtHead(val)
        return
    }
    if(index === this._size) {
        this.addAtTail(val)
        return
    } 
    if(index > this._size) return;

    const node = this.getNode(index - 1);
    node.next = new Node(val, node.next);
    this._size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this._size) return;
    if(index === 0) {
        this._head = this._head.next;
        if(index === this._size - 1){
            this._tail = this._head
        }
        this._size--;
        return;
    }
    const node = this.getNode(index - 1);
    node.next = node.next.next
    if(index === this._size - 1) {
        this._tail = node;
    }
    this._size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */