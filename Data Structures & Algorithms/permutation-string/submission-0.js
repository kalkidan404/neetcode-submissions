class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        

        if (s1.length > s2.length) return false;

        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);

        // Count characters in s1
        for (let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - 97]++;
        }

        // Create a window in s2 with the same length as s1
        for (let i = 0; i < s1.length; i++) {
            count2[s2.charCodeAt(i) - 97]++;
        }

        // Check the first window
        if (count1.join() === count2.join()) {
            return true;
        }

        // Slide the window
        for (let right = s1.length; right < s2.length; right++) {
            // Add the new character
            count2[s2.charCodeAt(right) - 97]++;

            // Remove the character leaving the window
            const left = right - s1.length;
            count2[s2.charCodeAt(left) - 97]--;

            // Check if frequencies match
            if (count1.join() === count2.join()) {
                return true;
            }
        }

        return false;
    }

    }

