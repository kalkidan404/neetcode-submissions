class Solution {
    topKFrequent(nums, k) {
        let count = {};

        // Count frequencies
        for (let n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        // Create buckets
        let bucket = Array.from({ length: nums.length + 1 }, () => []);

        for (let n in count) {
            let frequency = count[n];
            bucket[frequency].push(Number(n));
        }

        // Collect top k frequent elements
        let result = [];

        for (let i = bucket.length - 1; i >= 0; i--) {
            for (let n of bucket[i]) {
                result.push(n);

                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}