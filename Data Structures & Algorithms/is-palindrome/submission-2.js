class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // isPalindrome(s) {
    //     const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    //     const revStr = cleaned.split('').reverse().join('');
    //     return cleaned === revStr;
    // }

    isPalindrome(s){
        let newStr = s.toLowerCase();
        let left = 0;
        let right = newStr.length - 1;

        while(left < right){
            while(left < right && !this.isAlphanumeric(newStr[left])) left++
            while(right > left && !this.isAlphanumeric(newStr[right])) right--

            if(newStr[left] !== newStr[right]) return false
            left++
            right--
        }
            return true
    }
    isAlphanumeric(newStrChar){
        return (newStrChar >= 'a' && newStrChar <= 'z') || (newStrChar >= '0' && newStrChar <= '9')
    }
}
