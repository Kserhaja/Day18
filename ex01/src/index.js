function* multiplication() {
    console.log("Hello");
    yield "I am first yield ...";
    console.log("Hi");
    yield "I am second yield ...";
    return "buy buy";

}
var msg = multiplication();

// console.log(msg.next().value);
// console.log(msg.next().value);
// console.log(msg.next().value);

for (let message of msg) {
    console.log(message);
}
