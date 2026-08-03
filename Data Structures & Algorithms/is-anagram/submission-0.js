class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {
         if (s.length !== t.length) {
            return false;
        }

        let countS = {};
        let countT = {};

        // Count characters in s
        for (let char of s) {
            if (countS[char]) {
                countS[char]++;
            } else {
                countS[char] = 1;
            }
        }

        // Count characters in t
        for (let char of t) {
            if (countT[char]) {
                countT[char]++;
            } else {
                countT[char] = 1;
            }
        }

        // Compare the character counts
        for (let char in countS) {
            if (countS[char] !== countT[char]) {
                return false;
            }
        }

        return true;
    
}
}
