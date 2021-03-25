function* myGenerator(arguments) {
    arguments = 6, 7, 8;
    yield* [1, 2, 3, 4, 5];
    yield* "Arena";
    yield* arguments;
}
generatorArray();
// Only change code bellow this line

// Only change code above this line

module.exports = { generatorArray, myGenerator };