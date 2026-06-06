class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    // minEatingSpeed(piles, h) {
    //      let left = 1;
    //      let right = Math.max(... piles)
    //      let answer = right;

    //      while (left <= right){
    //         let k = Math.floor((left + right) / 2)

    //         let hour = 0;

    //         for(const pile of piles){
    //             hour += Math.ceil( pile/k)
    //         }
            
    //         if(hour <= h) {
    //             answer = k;
    //             right = k - 1;
    //         }else {
    //             left = k + 1 
    //         }
    //      }
    //      return answer
    // }

    minEatingSpeed(piles, h) {
    let k = 1;
    while (true) {
        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / k);
        }
        if (hours <= h) return k;
        k++;
    }
}
    minEatingSpeed(piles, h){
        let left = 0;
        let right = Math.max(...piles)
        let result

        while(left <= right){
            let mid = Math.floor((right + left) / 2)

            let hour = 0;
            for(const pile of piles){
                hour += Math.ceil(pile/ mid)
            }

            if(hour <= h){
                result = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return result
    }
}
