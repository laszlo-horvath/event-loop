console.log('1: Start');

setTimeout(() => console.log('2: setTimeout 1'), 0);

setImmediate(() => console.log('3: setImmediate'));

new Promise((resolve) => {
    console.log('4: Promise executor');
    resolve();
}).then(() => {
    console.log('5: Promise then');
    process.nextTick(() => console.log('6: nextTick in Promise'));
});

process.nextTick(() => console.log('7: nextTick 1'));

setTimeout(() => console.log('8: setTimeout 2'), 0);

(async () => {
    console.log('9: Async function');
    await Promise.resolve();
    console.log('10: After await');
})();

new Promise((resolve) => {
    resolve();
}).then(() => console.log('11: Promise then 2'));

process.nextTick(() => console.log('12: nextTick 2'));

setImmediate(() => {
    console.log('13: setImmediate 2');
    process.nextTick(() => console.log('14: nextTick in setImmediate'));
});

console.log('15: End');
