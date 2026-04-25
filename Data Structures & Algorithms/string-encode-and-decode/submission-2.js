class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // encode(strs) {
    //     if(!strs.length) return null;
    //     return strs.join('=enc=');
    // }

    // /**
    //  * @param {string} str
    //  * @returns {string[]}
    //  */
    // decode(str) {
    //     if(str === null) return [];
    //     return str.split('=enc=');
    // }

    // encode(strs){
    //     return strs.map((s) => s.length + '#' + s).join('');
    // }

    // decode(str){
    //     let result = [];
    //     let i = 0;

    //     while(i < str.length){
    //         let j = i;
    //         let len;
    //         // 5#Hello
    //         while(str[j] !== '#') j++
    //             len = parseInt(str.substring(i, j));
    //             result.push(str.substring(j+1, j+1 + len))
    //         i = j + 1 + len;
    //     }
    //     return result
    // }

    encode(strs){
        return strs.map((s) => s.length + '#' + s).join('');
    }

    decode(str){
        let result = [];
        let i = 0

        while(i < str.length){
            let j = i;
            while(str[j] !== '#') j++
            //5#Hello2#Hi
            let len = parseInt(str.substring(i, j));
            result.push(str.substring(j + 1, j + 1 + len))
            i = j + 1 + len;
        }
        return result;
    }
    
}
