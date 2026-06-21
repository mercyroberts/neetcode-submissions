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

    // findDuplicate(nums){
    //     nums.sort((a,b) => a-b)
    //     for(let i = 1; i < nums.length; i++){
    //         if(nums[i] === nums[i-1]){
    //             return nums[i]
    //         }
    //     }
    // }
    findDuplicate(nums){
        let slow = nums[0]
        let fast = nums[0]

        do{
            slow = nums[slow]
            fast = nums[nums[fast]]
        } while(slow !== fast)

        let slow2 = nums[0]
        while(slow !== slow2){
            slow2 = nums[slow2]
            slow = nums[slow]
        }
        return slow
    }
}
