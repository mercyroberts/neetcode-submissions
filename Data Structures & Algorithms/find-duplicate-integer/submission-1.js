class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // findDuplicate(nums) {
    //     const set = new Set()

    //     for(const n of nums){
    //         if(set.has(n)) return n
    //         set.add(n)
    //     }
    // }

    findDuplicate(nums){
        nums.sort((a,b) => a-b)
        for(let i = 1; i < nums.length; i++){
            if(nums[i] === nums[i-1]){
                return nums[i]
            }
        }
    }
}
