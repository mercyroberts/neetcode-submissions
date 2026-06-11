class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    // set(key, value, timestamp) {
    //     if(!this.keyStore.has(key)){
    //         this.keyStore.set(key, [])
    //     }
    //     this.keyStore.get(key).push([timestamp, value])
    // }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    // get(key, timestamp) {
    //     if(!this.keyStore.has(key)) return "";

    //     let arr = this.keyStore.get(key);
    //     let left = 0;
    //     let right = arr.length - 1;
    //     let result = "";

    //     while(left <= right){
    //         let mid = Math.floor((right + left)/ 2)

    //         if(arr[mid][0] <= timestamp){
    //             result = arr[mid][1]
    //             left = mid + 1
    //         } else {
    //             right = mid - 1
    //         }
    //     }
    //     return result
    // }

        set(key, value, timestamp) {
            const arr = this.keyStore

            if(!arr.has(key)){
                arr.set(key, [])
            }
            arr.get(key).push([timestamp, value])
        }

        get(key, timestamp) {
            if(!this.keyStore.has(key)) return ""

            let arr = this.keyStore.get(key)

            let result = ""
            let left = 0;
            let right = arr.length - 1

            while(left <= right){
                let mid = Math.floor((right + left)/2)

                if(arr[mid][0] <= timestamp){
                    result = arr[mid][1]
                    left = mid + 1;
                } else {
                    right = mid - 1
                }
            }
            return result
        }

}
