class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(nums, target) {
    //     for(let i = 0; i < nums.length; i++){
    //         for(let j = i + 1; i < nums.length; j++){
    //             if(nums[i] + nums[j] == target){
    //                 return [i, j];
    //             }
    //         }
    //     }
    //     return []
    // }

    // twoSum(nums, target){
    //     for(let i = 0; i < nums.length; i++){
    //         for(let j = i + 1; j < nums.length; j++){
    //             if(nums[i] + nums[j] == target){
    //                 return [i,j]
    //             }
    //         }
    //     }
    //     return []
    // }
    twoSum(nums, target) {
        let seen = new Map();

        for(let i = 0; i < nums.length; i++){
            let lastIndex = target - nums[i];
            if (seen.has(lastIndex)){
                return [seen.get(lastIndex), i]
            }
            seen.set(nums[i], i)
        }
        return []
    }
}
