function* myGenerator() {
    yield insideGenerator1;
    yield insideGenerator2();
    yield insideGenerator3();

}

function* insideGenerator1() {
    

}
function* insideGenerator2() {

}

function* insideGenerator3() {

}

const iterator = insideGenerator1
module.exports = { fifteenArray, myGenerator };