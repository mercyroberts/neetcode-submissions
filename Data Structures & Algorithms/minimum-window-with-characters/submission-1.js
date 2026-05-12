class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return "";

        //setting t count map
        let tCount = new Map();
        for(const c of t){
            tCount.set(c, (tCount.get(c) || 0) + 1);
        }

        let left = 0
        let need = tCount.size;
        let have = 0;
        let bestLen = Infinity;
        let bestStart = 0;

        let winCount = new Map();

        //Now going over the s window by window
        for(let i = 0; i < s.length; i++){
            let ch = s[i];
            winCount.set(ch, (winCount.get(ch) || 0) + 1)
            if(tCount.has(ch) && winCount.get(ch) === tCount.get(ch)){
                have++;
            }

            while(have === need){
            let winLen = i - left + 1;
            if (winLen < bestLen){
                bestLen = winLen
                bestStart = left;
            }
                let chL = s[left];
                winCount.set(chL, winCount.get(chL) - 1)
                if(tCount.has(chL) && winCount.get(chL) < tCount.get(chL)){
                    have--;
                }
                left++
            }
        }
        return bestLen === Infinity ? "" : s.substring(bestStart, bestStart + bestLen)
    }
}
