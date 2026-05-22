class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    // dailyTemperatures(temperatures) {
    //     let result = new Array(temperatures.length).fill(0)
    //     for(let i = 0; i < temperatures.length; i++){
    //         for (let j = i + 1; j < temperatures.length; j++){
    //             if(temperatures[j] > temperatures[i]){
    //                 result[i] = j - i;
    //                 break;
    //             }
    //         }
    //     }
    //     return result
    // }

    dailyTemperatures(temperatures){
        let result = new Array(temperatures.length).fill(0);
        let stack = [];

        for(let i = 0; i < temperatures.length; i++){

            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
                const prevIdx = stack.pop()
                result[prevIdx] = i - prevIdx;
            }
            stack.push(i);
        }
        return result;
    }
}
