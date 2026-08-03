class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map= {};
        for(let i=0;i<=nums.length;++i){
              let n=target-nums[i];
              if(n in map){
                return [map[n],i];
              }else {
                map[nums[i]]=i;
              }
         
        }
    }
}
