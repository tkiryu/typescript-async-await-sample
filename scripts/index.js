function sleep(milliseconds) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(); }, milliseconds);
    });
}
// async function main() {
//   await sleep(1000);
//   console.log('foo');
//   await sleep(1000);
//   console.log('bar');
//   await sleep(1000);
//   console.log('baz');
// }
function main() {
    sleep(1000)
        .then(function () {
        console.log('foo');
        return sleep(1000);
    })
        .then(function () {
        console.log('bar');
        return sleep(1000);
    })
        .then(function () {
        console.log('baz');
    });
}
//# sourceMappingURL=index.js.map