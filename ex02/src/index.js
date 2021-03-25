
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

fifteenArray();
const iterator = myGenerator();
console.log(iterator.next());

module.exports = { fifteenArray, myGenerator };