// Pure ES5 で実現
function sleep2(milliseconds, callback) {
  setTimeout(function () {
    callback();
  }, milliseconds);
}
function main2() {
  sleep2(1000, function () {
    console.log('foo2');
    sleep2(1000, function () {
      console.log('bar2');
      sleep2(1000, function () {
        console.log('baz2');
      });
    });
  });
}