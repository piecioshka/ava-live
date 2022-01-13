const test = require("ava");
const { Clock } = require("./clock");
const util = require("util");

// Wrap Callback by Promise
Clock.prototype.tick = util.promisify(Clock.prototype.tick);

test("async with callback (based on then)", (assert) => {
  const c = new Clock();
  return c.tick().then(() => {
    assert.pass();
  });
});

test("async with callback (based on async / await)", async (assert) => {
  const c = new Clock();
  const s = Date.now();
  await c.tick();
  const e = Date.now();
  assert.true(s + 1000 <= e);
});

test("async with promise (based on async / await)", async (assert) => {
  const c = new Clock();
  const s = Date.now();
  await c.tickPromise();
  const e = Date.now();
  assert.true(s + 1000 <= e);
});
