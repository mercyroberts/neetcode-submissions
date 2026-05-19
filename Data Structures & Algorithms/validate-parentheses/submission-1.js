class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const match = {
            ")" : '(',
            "}" : '{',
            "]" : '['
        }

        for(const c of s){
            if(c === '(' || c === '{' || c === '['){
                stack.push(c)
            } else {
                if(stack.length === 0) return false 
                if(stack[stack.length - 1] !== match[c]) return false 
                stack.pop();
            }
        }
        return stack.length === 0;
    }
}
