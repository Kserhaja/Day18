function* anotherMultiplication(x) {
    yield x * 2;    
    yield x * 4;
    yield x * 8;
}    
for (let i = 0; i < i; i++) {
    x *= 2;
 myArr.push(x);

}
function* multiplication(x) {
    yield* anotherMultiplication(x);
    
}
var num = multiplication(3);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);



module.exports = multiplication;
