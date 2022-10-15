
var MyQueue = function() {
    this.stackOut = []
    this.stackIn = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackIn.push(x)
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let size = this.stackOut.length
    
    if(size) {
       return this.stackOut.pop()
    }
    while(this.stackIn.length) {
        // reverse the stackIn, and push into stackOut
       this.stackOut.push(this.stackIn.pop())
    }
    
    return this.stackOut.pop()
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
   let item = this.pop()
   // peek just find item, not include remove operation
   this.stackOut.push(item)
    return item

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(!this.stackIn.length && !this.stackOut.length) {
        return true
    }
    return false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */