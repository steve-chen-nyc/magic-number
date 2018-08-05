const magicNumberWithEs6 = require("./es6");
const magicNumberWithRamda = require("./ramda");
const magicNumberWithTransducer = require('./transducer');
const numbers = [4,10,0,27,42,17,15,-6,58];

test('magicNumber is 42', () => {
  expect(magicNumberWithEs6( numbers )).toBe(42);
});

test('magicNumber is 42', () => {
  expect(magicNumberWithRamda( numbers )).toBe(42);
});

test('magicNumber is 42', () => {
  expect(magicNumberWithTransducer( numbers )).toBe(42);
});
