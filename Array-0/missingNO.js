// missing NO

// Given an array nums containing n distinct numbers in the range [0, n],
//  return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
// 2 is the missing number in the range since it does not appear in nums.

// Solution sum of all natural no 

var missingNumber = function(nums) {
const n= nums.length;
const maxSu = (n*(n+1))/2;
let sum =0

for(let i=0;i<n;i++){
    sum = sum+nums[i]
}
return maxSu - sum 
    
};