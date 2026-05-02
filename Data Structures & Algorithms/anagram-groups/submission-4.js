class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // groupAnagrams(strs) {
    //     // Sort the inner strings
    //     const sortedStr = strs.map((str) => str.split("").sort().join(""))
    //     // compare against the map.
    //     const mapArray = {};
    //     for(let i = 0; i < sortedStr.length; i++){
    //         if(!mapArray[sortedStr[i]]){
    //             mapArray[sortedStr[i]] = [strs[i]];
    //         } else {
    //             mapArray[sortedStr[i]].push(strs[i])
    //         }
    //     }
    //     return Object.values(mapArray)
    // }

    groupAnagrams(strs){
        let sorted = strs.map((str) => str.split('').sort().join(''));

        let map = {};
        for(let i = 0; i < sorted.length; i++){
            if(!map[sorted[i]]){
                map[sorted[i]] = [strs[i]];
            }else {
            map[sorted[i]].push(strs[i])
            }
        }
        return Object.values(map);
    }
}
