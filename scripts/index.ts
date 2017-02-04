function sleep(milliseconds: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), milliseconds);
  });
}

async function main() {
  await sleep(1000);
  console.log('foo');
  await sleep(1000);
  console.log('bar');
  await sleep(1000);
  console.log('baz');
}

// 従来の Promise のメソッドチェーンで実現とこうなる
// function main() {
//   sleep(1000)
//   .then(() => {
//     console.log('foo');
//     return sleep(1000);
//   })
//   .then(() => {
//     console.log('bar');
//     return sleep(1000);
//   })
//   .then(() => {
//     console.log('baz');
//   });
// }
