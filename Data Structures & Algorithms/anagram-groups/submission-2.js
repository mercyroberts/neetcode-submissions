class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Sort the inner strings
        const sortedStr = strs.map((str) => str.split("").sort().join(""))
        // compare against the map.
        const mapArray = {};
        for(let i = 0; i < sortedStr.length; i++){
            if(!mapArray[sortedStr[i]]){
                mapArray[sortedStr[i]] = [strs[i]];
            } else {
                mapArray[sortedStr[i]].push(strs[i])
            }
        }
        return Object.values(mapArray)
    }
}
