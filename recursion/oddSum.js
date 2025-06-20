// sum of all the odd no in an array

function sum (n){
    if(n===0 ){
        if(arr[n] % 2 !==0) return arr[n]
        else return 0
       
    }

   if(arr[n] % 2 !==0) return arr[n] + sum(n-1)
    else return 0 + sum(n-1)
    
}



let arr = [5,3,2,3]

console.log(sum(arr.length-1))
