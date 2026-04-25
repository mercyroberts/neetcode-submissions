class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const array = new Set();
        for (let i = 0; i <= nums.length; i++){
            if (array.has(nums[i])){
                return true;
            } else {
                array.add(nums[i])
            }
        }
        return false
    }
}
