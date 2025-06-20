// Sum of all the element in the array

function sum (n){

    if(n ===0) return arr[n]

    return arr[n] + sum(n-1)
}



let arr = [1,2,3,4,5,0]

console.log(sum(arr.length-1))