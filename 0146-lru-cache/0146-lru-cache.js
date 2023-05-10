/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map()
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)) {
        // if key used, means that not removed soon, need put the key on the back
        let val = this.map.get(key)
        this.map.delete(key)
        this.map.set(key, val)
        return val
    } else{
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // if the key exist in the map,
    // then put the key into the back
    if(this.map.has(key)) {
        this.map.delete(key);
        this.map.set(key, value) 
    } else {
        // if map's szie less than capacity
        // just insert into the map
        // if the map's szie equal capacity
        // we need remvoe the first one, then 
        // put the key into map
        if(this.map.size < this.capacity) {
            this.map.set(key, value) 
        } else {
            const iterator = this.map.keys()
            this.map.delete(iterator.next().value)
            this.map.set(key, value) 
        }
    }
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */