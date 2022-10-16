/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    let first, second
    const map = new Map([
        ["+", (a, b) => b + a],
        ["-", (a, b) => b - a],
        ["*", (a, b) => b * a],
        ["/", (a, b) => Math.trunc(b / a)]
    ])
    tokens.forEach((token) => {
     if(!map.has(token)) {
         stack.push(token)
     } else {
         first = parseInt(stack.pop())
         second = parseInt(stack.pop())
         stack.push(map.get(token)(first, second))
     }
    })
    return stack.pop()
};