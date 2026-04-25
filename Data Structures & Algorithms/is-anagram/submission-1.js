class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // isAnagram(s, t) {
    //     if (s.length !== t.length){
    //         return false;
    //     }
    //     let sortedS = s.split("").sort().join();
    //     let sortedT = t.split("").sort().join();

    //     return sortedS == sortedT;
    // }

    isAnagram(s, t){
        if (s.length !== t.length ) return false;

        let map = {};
        for (let i =0; i < s.length; i++){
            let letterOfS = s[i];
            if(!map[letterOfS]){
                map[letterOfS] = 1;
            } else {
            map[letterOfS]++;
            }
        }

        for (let i =0; i < t.length; i++){
            let letterOfT = t[i]
            if(map[letterOfT] === undefined){
                return false
            }
            if(map[letterOfT] < 1 ) {
                return false
            }
            map[letterOfT]--
        }
        return true;
    }
}
