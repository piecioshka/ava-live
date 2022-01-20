const test = require("ava");
const { Gallery } = require("./gallery");

console.log(test);

let i = 0;

test.before.skip(() => console.log('before'));
test.beforeEach.skip(() => {
  console.log('beforeEach');
  ++i;
});
test.after.skip(() => console.log('after'));
test.afterEach.skip(() => console.log('afterEach'));

test.skip("Example scenario 1", (t) => {
  const g = new Gallery();
  t.pass();
});
test("Example scenario 2 A", (t) => {
  // console.log('from 2 A', i);
  t.pass();
});
test("Example scenario 2 B", (t) => {
  // console.log('from 2 B', i);
  t.pass()
});
// test.only("Example scenario 3", (t) => {
//   const g = new Gallery();
//   t.pass();
// });
test.todo("Example scenario 4");

test.failing('Example scenario 5 A', (assert) => {
  const g = new Gallery();
  assert.true(g.hasOwnProperty('ciasteczko'));
});

test('Example scenario 5 B', (assert) => {
  const g = new Gallery();
  assert.false(g.hasOwnProperty('ciasteczko'));
});

// Macros

const cases = [
  { input: () => 3 * 3, output: 9 },
  { input: () => 3 + 3, output: 6 },
  { input: () => 3 - 3, output: 0 },
  { input: () => 3 / 3, output: 1 },
];

// const macro = test.macro((t, input, expected) => {
// 	t.is(input, expected);
// });

function macro(t, input, expected) {
	t.is(input, expected);
}

cases.forEach(({ input, output }) => {
  test(`Example scenario 6 output:${output}`, macro, input(), output);
});

const delay = (time = 1000) => new Promise(r => setTimeout(r, time));

// Serial

test.serial.skip('Example scenario 7', async (assert) => {
  await delay(200);
  assert.pass();
});
test.serial('Example scenario 8', async (assert) => {
  await delay(100);
  assert.pass();
});
test.serial('Example scenario 9', async (assert) => {
  await delay(300);
  assert.pass();
});
