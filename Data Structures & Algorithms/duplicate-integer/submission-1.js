class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen=new Set();
       for(let i=0;i<nums.length;++i){
        if(seen.has(nums[i])){
            return true;
        }else if(!seen.has(nums[i])){
         seen.add(nums[i]);
        }
       }return false;
}
}