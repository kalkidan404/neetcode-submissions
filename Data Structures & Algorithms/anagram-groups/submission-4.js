class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let map={};
       for (let i=0;i<strs.length;++i){
        let s=strs[i].split("").sort().join("");
        if(s in map){
            map[s].push(strs[i]);
        }else {
            map[s]=[strs[i]]
        }

       }
       return Object.values(map);
    }

}
