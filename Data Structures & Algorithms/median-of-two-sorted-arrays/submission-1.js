class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    // findMedianSortedArrays(nums1, nums2) {
    //     const merged = [];
    //     let i = 0, j = 0;

    //     while(i < nums1.length && j < nums2.length){
    //         if(nums1[i] <= nums2[j]){
    //             merged.push(nums1[i])
    //             i++
    //         } else {
    //             merged.push(nums2[j])
    //             j++
    //         }
    //     }

    //     //Handle excess from one array

    //     while(i < nums1.length){
    //         merged.push(nums1[i])
    //         i++
    //     }

    //     while(j < nums2.length){
    //         merged.push(nums2[j])
    //         j++
    //     }

    //     //Handle the median fetch from the merged
    //     let n = merged.length
    //     if(n % 2 === 1){
    //         return merged[Math.floor(n / 2)]
    //     } else{
    //         return (merged[n/2 - 1] + merged[n / 2]) / 2
    //     }
    // }

    findMedianSortedArrays(nums1, nums2) {
        let merged = [];
        let i =0, j= 0;
        let len1 = nums1.length
        let len2 = nums2.length

        while(i < len1 && j < len2){
            if(nums1[i] <= nums2[j]){
            merged.push(nums1[i])
            i++
            } else{
                merged.push(nums2[j])
                j++
            }
        }

        while(i < len1){
            merged.push(nums1[i])
            i++
        }

        while(j < len2){
            merged.push(nums2[j])
            j++
        }

        let n = merged.length
        if(n%2 === 1){
            return merged[Math.floor(n/2)]
        } else {
            return (merged[n / 2 - 1] + merged[n / 2]) / 2
        }
    }

}
