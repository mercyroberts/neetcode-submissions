class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     const array = new Set();
    //     for (let i = 0; i <= nums.length; i++){
    //         if (array.has(nums[i])){
    //             return true;
    //         } else {
    //             array.add(nums[i])
    //         }
    //     return false
    //     }
    // }
    // hasDuplicate(nums) {
    //     const hasDupe = new Set(nums);

    //     if (hasDupe.size !== nums.length){
    //         return true
    //     }
    //     return false
    // }

    hasDuplicate(nums){
        nums.sort()
        let foundDup = false

        for(let i=0; i < nums.length - 1; i++){
            if(nums[i] == nums[i+1]){
                foundDup = true
                break
            }
        }
        return foundDup
    }
}
