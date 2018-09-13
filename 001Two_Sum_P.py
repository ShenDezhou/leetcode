/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        buckets = {}
        for index, num in enumerate(nums):
            if target - num in buckets:
                return buckets[target - num], index
            else:
                buckets[num] = index
