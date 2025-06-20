function sum(n) {

    let s = 0;
    if (n === 0) {
        return s
    }
    s += n;
    n--
   return sum(n)
}



let n = 5
console.log(sum(n))