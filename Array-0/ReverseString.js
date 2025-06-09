// Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// solution 

var reverseString = function(s) {
    let x = s.length-1;
    for(let i =0; i<Math.floor(s.length/2); i++){
        let temp = s[i];
        s[i]= s[x];
        s[x] = temp;
        x--;
    }
    return s;
};