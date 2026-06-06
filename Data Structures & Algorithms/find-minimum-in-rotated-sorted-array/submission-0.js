class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums.length === 0) return 0;

        return Math.min(... nums)
    }
}
