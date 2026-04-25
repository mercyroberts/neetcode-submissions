class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        for(let i = 0; i < nums.length; i++){
            count[nums[i]] = (count[nums[i]] || 0) + 1;
        }

        let entries = Object.entries(count).
        sort((a,b) => b[1] - a[1]);

        let result = [];
        for(let i = 0; i < k; i++){
            result.push(Number(entries[i][0]));
        }
        return result;
    }
}
