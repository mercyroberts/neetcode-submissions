class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // productExceptSelf(nums) {
    //     let forwardArray = [];
    //     let start = 1;

    //     for(let i = 0; i < nums.length; i++){
    //         forwardArray.push(start);
    //         start = start * nums[i];
    //     }

    //     let res = [];
    //     let start2 = 1;

    //     for(let i = nums.length-1; i >= 0; i--){
    //         res.unshift(start2 * forwardArray[i]);
    //         start2 = start2 * nums[i];
    //     }

    //     return res;
    // }

    // productExceptSelf(nums){
    //     let res = [];
    //     let len = nums.length;

    //     let prefix = 1;
    //     for(let i = 0; i < len; i++){
    //         res[i] = prefix;
    //         prefix *= nums[i];
    //     }

    //     let suffix = 1;
    //     for(let i = len - 1; i >= 0; i--){
    //         res[i] = suffix * res[i];
    //         suffix *= nums[i];
    //     }
    //     return res;
    // }

    productExceptSelf(nums){
        let res = [];
        let len = nums.length;
        let prefix = 1;

        for(let i = 0; i < len; i++){
            res[i] = prefix;
            prefix *= nums[i];
        }

        let suffix = 1;
        for(let i = len -1; i >= 0; i--){
            res[i] *= suffix;
            suffix *= nums[i];
        }
        return res;
    }
}
