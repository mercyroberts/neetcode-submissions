class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // characterReplacement(s, k) {
    //     let countMap = new Map();
    //     let left = 0;
    //     let max = 0;

    //     for(let right = 0; right < s.length; right++){
    //         let strPos = s[right];

    //         countMap.set(strPos, (countMap.get(strPos) || 0) + 1);

    //         let maxFreq = 0;
    //         let mapValues = countMap.values()
    //         for(const v of mapValues) maxFreq = Math.max(maxFreq, v);

    //         // Shrink while not doable e.i while the swap is more than k
    //         while((right - left + 1) - maxFreq > k){
    //             countMap.set(s[left], countMap.get(s[left]) - 1)
    //             left++;
    //         }

    //         max = Math.max(max, right - left + 1)
    //     }
    //     return max
    // }

    characterReplacement(s,k){
        let count = new Map();
        let left = 0;
        let max = 0;

        for(let right = 0; right < s.length; right++){
            count.set(s[right], (count.get(s[right]) || 0 ) + 1);

            let maxf = 0;
            for(const v of count.values()) maxf = Math.max(maxf, v);

            while((right - left+1)-maxf > k){
                count.set(s[left], count.get(s[left]) - 1)
                left++;          
            }

            max = Math.max(max, right - left+1);
        }
        return max;
    }
}
