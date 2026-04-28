class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // longestConsecutive(nums) {
    //     nums.sort((a,b)=> a - b);
    //     let longest = 1;
    //     let current = 1;

    //     for(let i = 1; i < nums.length; i++){
    //         if(nums[i] === nums[i-1]) continue;
    //         if(nums[i] === nums[i-1] + 1) current ++;
    //         else
    //         current = 1;
    //         longest = Math.max(longest, current);
    //     }
    //     return longest
    // }

    longestConsecutive(nums){
        let numSet = new Set(nums)
        let longest = 0;

        for(const num of nums){
            if(!numSet.has(num - 1)){
                let current = num
                let length = 1
                while(numSet.has(current + 1)){
                 current++;
                 length++;
                }
            longest = Math.max(longest, length);
            }
        }
        return longest
    }
}
