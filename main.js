function square(n) {
    return n*n;
}
function cube(n) {
    return n*n*n;
}
function sumOfSomething(a,b,fn) {
    let a1 = fn(a);
    let a2 = fn(b);
    return a1 + a2;
}
let ans = sumOfSomething(1,2,cube);
console.log(ans);