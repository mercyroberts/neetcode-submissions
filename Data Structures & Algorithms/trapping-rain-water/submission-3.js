class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // trap(height) {
    //     let total = 0;

    //     for(let i = 0; i < height.length; i++){
    //         let leftMax = 0;
    //         for(let j = 0; j <= i; j++) leftMax = Math.max(leftMax, height[j])

    //         let rightMax = 0;
    //         for(let j = i; j < height.length; j++) rightMax = Math.max(rightMax, height[j])

    //         total += Math.min(leftMax, rightMax) - height[i]
    //     }
    //     return total;
    // }

    // trap(height){
    //     let total = 0;
    //     let left = 0;
    //     let right = height.length - 1;
    //     let leftMax = 0;
    //     let rightMax = 0;
    //     let water = 0;

    //     while(left < right){
    //         //[0,2,0,3,1,0,1,3,2,1]
    //         if(height[left] < height[right]){
    //             leftMax = Math.max(leftMax, height[left]);
    //             water = leftMax - height[left];
    //             total += water;
    //             left++;
    //         } else {
    //             rightMax = Math.max(rightMax, height[right]);
    //             water = rightMax - height[right];
    //             total += water
    //             right--;
    //         }
    //     }
    //     return total;
    // }

    trap(height){
        let left = 0;
        let right = height.length - 1;
        let total = 0;
        let water = 0;
        let lMax = 0;
        let rMax = 0

        while(left < right){
            if(height[left] < height[right]){
                lMax = Math.max(lMax, height[left]);
                water = lMax - height[left];
                total += water;
                left++;
            } else {
                rMax = Math.max(rMax, height[right]);
                water = rMax - height[right];
                total += water;
                right--;
            }
        }
        return total;
    }
}
