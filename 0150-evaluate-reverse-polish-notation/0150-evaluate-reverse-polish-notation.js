/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    let first, second
    tokens.forEach((token) => {
        switch(token) {
            case '+':
                first = parseInt(stack.pop()) 
                second = parseInt(stack.pop())
                stack.push(second + first)
                break
            case '-':
                first = parseInt(stack.pop()) 
                second = parseInt(stack.pop()) 
                stack.push(second - first)
                break   
            case '*':
                first = parseInt(stack.pop()) 
                second = parseInt(stack.pop()) 
                stack.push(second * first)
                break
            case '/':
                first = parseInt(stack.pop()) 
                second = parseInt(stack.pop()) 
                stack.push(Math.trunc(second / first))
                break
            default:
                stack.push(token)
                break
        }
    })
    return stack.pop()
};