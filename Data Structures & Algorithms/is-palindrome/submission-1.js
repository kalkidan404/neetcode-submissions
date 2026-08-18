class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s=s.toLowerCase().replace(/[^a-z0-9]/g,"");
        let left=0;
        let right=s.length-1;
        while(right>=left){
        if(s[right]==s[left]){
             right--;
             left++;
        }
        else{
            return false;
        }
        }
        return true;
    }
}
