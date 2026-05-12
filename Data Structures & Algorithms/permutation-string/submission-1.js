class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    // checkInclusion(s1, s2) {
    //     let s1Count = new Map();

    //     const mapsEqual = (a, b) => {
    //     if(a.length !== b.length) return false;

    //     for(const [key, val] of a){
    //         if (b.get(key) !== val) return false;
    //     }
    //     return true;
    //     }

    //     for(const c of s1){
    //         s1Count.set(c, (s1Count.get(c) || 0) + 1);
    //     }

    //     let winCount  = new Map();

    //     for(let i =0; i < s1.length; i++){
    //         let c = s2[i];
    //         winCount.set(c, (winCount.get(c) || 0 ) + 1 );
    //     }

    //     if(mapsEqual(s1Count, winCount)) return true;

    //     for(let i = s1.length; i< s2.length; i++ ){
    //         let enteringChar = s2[i];
    //         let leavingChar = s2[i - s1.length];

    //         winCount.set(enteringChar, (winCount.get(enteringChar) || 0 ) + 1);

    //         let newCount = winCount.get(leavingChar) - 1;
    //         if(newCount === 0){
    //             winCount.delete(leavingChar);
    //         }else {
    //             winCount.set(leavingChar, newCount);
    //         }

    //         if (mapsEqual(s1Count, winCount)) return true;
    //     }
    //     return false

    // }

    checkInclusion(s1, s2){
        const mapEquals = (a,b) => {
            if(a.size !== b.size) return false;

            for(const [key, val] of a){
                if(b.get(key) !== val) return false;
            }
            return true;
        }

        let s1Count = new Map();

        for(const c of s1){
            s1Count.set(c, (s1Count.get(c) || 0) + 1);
        }

        let windowCount = new Map();

        for(let i = 0; i < s1.length; i++){
            let c = s2[i];
            windowCount.set(c, (windowCount.get(c) || 0) + 1);
        }

        if(mapEquals(s1Count, windowCount)) return true;

        for(let i = s1.length; i < s2.length; i++){
            let entChar = s2[i];
            let leavChar = s2[i - s1.length]

            windowCount.set(entChar, (windowCount.get(entChar) || 0) + 1);

            let newC = windowCount.get(leavChar) - 1;
            if(newC === 0){
                windowCount.delete(leavChar)
            } else {
                windowCount.set(leavChar, newC)
            }

            if(mapEquals(s1Count, windowCount)) return true;
        }
        return false;
    }
}
