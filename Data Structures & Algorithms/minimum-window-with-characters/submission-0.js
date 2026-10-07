class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
    
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    
        if (t.length > s.length) return "";

        const need = new Map();

        // Count how many of each character we need
        for (const char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        let have = new Map();
        let left = 0;

        let formed = 0;
        const required = need.size;

        let bestStart = 0;
        let bestLength = Infinity;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            if (need.has(char)) {
                have.set(char, (have.get(char) || 0) + 1);

                // This character has reached the amount we need
                if (have.get(char) === need.get(char)) {
                    formed++;
                }
            }

            // Window is valid
            while (formed === required) {
                // Save the smallest window
                if (right - left + 1 < bestLength) {
                    bestLength = right - left + 1;
                    bestStart = left;
                }

                const leftChar = s[left];

                if (need.has(leftChar)) {
                    have.set(leftChar, have.get(leftChar) - 1);

                    // We no longer have enough of this character
                    if (have.get(leftChar) < need.get(leftChar)) {
                        formed--;
                    }
                }

                left++;
            }
        }

        return bestLength === Infinity
            ? ""
            : s.substring(bestStart, bestStart + bestLength);
    }

    
}
