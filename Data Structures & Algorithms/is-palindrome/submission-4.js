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

    // isPalindrome(s){
    //     let newStr = s.toLowerCase();
    //     let left = 0;
    //     let right = newStr.length - 1;

    //     while(left < right){
    //         while(left < right && !this.isAlphanumeric(newStr[left])) left++
    //         while(right > left && !this.isAlphanumeric(newStr[right])) right--

    //         if(newStr[left] !== newStr[right]) return false
    //         left++
    //         right--
    //     }
    //         return true
    // }
    // isAlphanumeric(newStrChar){
    //     return (newStrChar >= 'a' && newStrChar <= 'z') || (newStrChar >= '0' && newStrChar <= '9')
    // }

    isPalindrome(s){
        s = s.toLowerCase();
        let left = 0;
        let right = s.length - 1;

        let isAlphanum = ((c) => (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'));
        
        while(left < right){
            while(left < right && !isAlphanum(s[left])) left++;
            while(left < right && !isAlphanum(s[right])) right--;
            if(s[left] !== s[right]) return false;
            left++;
            right --
        }
        return true;
    }
}
