/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // if the key exits in the map,we should 
    // move the key value pair to the tail
 if(this.map.has(key)){
     let val =  this.map.get(key)
     this.map.delete(key)
     this.map.set(key, val)
     return val
 } else {
     return -1
 }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
     // if the key exits in the map,we should 
    // move the key value pair to the tail
  if(this.map.has(key)) {
    this.map.delete(key)
    this.map.set(key, value) 
  } else {
       // if the key not exits in the map,we should 
    // delete the head key value pair
      if(this.map.size === this.capacity) {
          let firstKey = this.map.keys().next().value
          this.map.delete(firstKey)
      } 
      this.map.set(key, value)
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */