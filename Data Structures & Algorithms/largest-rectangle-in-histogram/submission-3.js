class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // largestRectangleArea(heights) {
    //     let maxH = -Infinity;
    //     for(let i = 0; i < heights.length; i++){
    //         let h = [heights[i]];

    //         let left = i;
    //         while(left > 0 && heights[left - 1] >= h){
    //             left--
    //         }

    //         let right = i;
    //         while(right < heights.length - 1 && heights[right + 1] >= h){
    //             right++
    //         }

    //         let width = right - left + 1;
    //         let area = width * heights[i]
    //         maxH = Math.max(maxH, area)
    //     }
    //     return maxH
    // }

    largestRectangleArea(heights){
        let max = 0;

        for(let i =0; i < heights.length; i++){
            let h = heights[i];
            let width = 0;

            let left = i;
            while(left > 0 && heights[left - 1] >= h){
                left --;
            }

            let right = i;
            while(right < heights.length -1 && heights[right + 1] >= h){
                right++;
            }

            width = right - left + 1;
            let area = width * heights[i]
            max = Math.max(max, area)
        }
        return max
    }
}
