class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // lengthOfLongestSubstring(s) {
    //     let len = s.length;
    //     let left = 0;
    //     let right = 0;
    //     let max = 0;
    //     let seen = new Set();

    //     for(right; right < len; right++){
    //         while(seen.has(s[right])){
    //             seen.delete(s[left])
    //             left++
    //         }
    //         seen.add(s[right])

    //         max = Math.max(max, seen.size);
    //     }
    //     return max
    // }
    lengthOfLongestSubstring(s){
        let len = s.length;
        let left = 0;
        let max = 0;
        let count = new Set();

        for(let right = 0; right < len; right++){
            while(count.has(s[right])){
                count.delete(s[left]);
                left++;
            }
            count.add(s[right]);

            max = Math.max(max,count.size);
        }
        return max;
    }
}
