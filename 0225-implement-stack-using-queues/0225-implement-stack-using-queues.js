
var MyStack = function() {
    this.queue1 = []
    this.queue2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let size = this.queue1.length
    if(!size) {
        // exchange the queue1 && queue2 when queue1 is empty
        [this.queue1, this.queue2] = [this.queue2, this.queue1]
    }
    while(this.queue1.length > 1) {
        //  save the rest element of queue1 except first element in queue2 
        this.queue2.push(this.queue1.shift())
    }
    // the first element is what we need
    return this.queue1.pop()

};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let item = this.pop()
    this.queue1.push(item)
    return item
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(!this.queue1.length && !this.queue2.length) {
        return true
    }
    return false
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */