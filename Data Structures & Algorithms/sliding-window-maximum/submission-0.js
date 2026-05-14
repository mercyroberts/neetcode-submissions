class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
    const result = [];
    const deque = [];  // stores indices, values strictly decreasing
    
    for (let right = 0; right < nums.length; right++) {
        // Step A: pop from back while back's value <= current value
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[right]) {
            deque.pop();
        }
        
        // Step B: push current index
        deque.push(right);
        
        // Step C: pop from front if it's outside the window
        if (deque[0] < right - k + 1) {
            deque.shift();
        }
        
        // Step D: once window is fully formed, record max
        if (right >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
}
}
