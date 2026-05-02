class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // threeSum(nums) {
    //     nums.sort((a,b)=> a - b);
    //     let result = [];

    //     for(let i = 0; i < nums.length; i++){
    //         //eliminate dupe in the outer loop
    //         if(i > 0 && nums[i] === nums[i - 1]) continue;

    //         //End early
    //         if(nums[i] > 0) break;

    //         // Now using pointers
    //         let left = i + 1;
    //         let right = nums.length - 1;
    //         let target = -nums[i];

    //         while(left < right){
    //             let sum = nums[left] + nums[right];
    //             if(sum === target){
    //                 result.push([nums[i], nums[left], nums[right]]);

    //                 while(left < right && nums[left] === nums[left + 1])left++;
    //                 while(left < right && nums[right] === nums[right - 1]) right--;

    //                 left++;
    //                 right--;
    //             } else if(sum < target) left++;
    //             else right--;
    //         }
    //     }
    //     return result;
    // }

    threeSum(nums){
        nums.sort((a,b)=> a-b);
        const result = [];
        for(let i = 0; i < nums.length; i++){
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            if(nums[i] > 0) break;

            let left = i + 1;
            let right = nums.length - 1;
            let target = -nums[i];

            while(left < right){
                let sum = nums[left] + nums[right];

                if(sum === target){
                    result.push([nums[i], nums[left], nums[right]])

                    while(left < right && nums[left] === nums[left + 1]) left ++;
                    while(left < right && nums[right] === nums[right - 1]) right --;

                    left++
                    right--
                } else if(sum < target) left++
                else right--;
            }
        }
        return result;
    }
}
