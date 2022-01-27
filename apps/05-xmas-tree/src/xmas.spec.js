const test = require("ava");
const { XMas } = require("./xmas");

const err = "XMas is a number, but should be a class";
const delay = (time = 1000) => new Promise((r) => setTimeout(r, time));

test("testing asserts", (assert) => {
  // console.log({ assert });
  assert.pass.skip();
  if (typeof XMas === "number") {
    assert.fail.skip(err);
  }
  assert.is.skip(typeof XMas, "string", err);
  assert.not.skip(typeof XMas, "number", err);
  assert.deepEqual.skip({ a: 1, b: 2 }, { b: 2, a: 1 });
  assert.notDeepEqual.skip({ a: ["a"], b: 2 }, { b: 2, a: ["c"] });
  assert.like.skip({ a: 1, b: 2 }, { b: 2 });

  // Assertion below doesn't work
  assert.like.skip(
    {
      users: [
        { id: 1, name: "X" },
        { id: 2, name: "Y" },
      ],
    },
    {
      users: [{ id: 2 }],
    }
  );
  assert.throws.skip(() => {
    throw new Error("ciach!");
  });
  assert.notThrows.skip(() => {
    console.log("ciasteczko");
  });

  [1, "ciasteczko", {}, [], -1, true].forEach((x) => assert.truthy(x));
  // All Falsy Values
  [0, "", false, undefined, NaN, null].forEach((x) => assert.falsy(x));

  assert.true.skip(true);
  assert.false.skip(false);

  assert.regex.skip("ewa", /^e\w\w$/);
  assert.notRegex.skip("ewa", /^f\w\w$/);
  [1, "ciasteczko", {}, [], -1, true].forEach((x) => assert.assert(x));

  assert.log("AAAAAAAA");
  console.log("BBBBBBB");

  // Last
  // Input
  // First
  // Output
  assert.teardown(() => {
    console.log("drugi");
  });
  assert.teardown(() => {
    console.log("pierwsze");
  });
});

test("testing async asserts", async (assert) => {
  const a = await assert.throwsAsync(
    Promise.reject(new ReferenceError("fake error"))
  );
  assert.is(a.message, "fake error");
  // assert.is(a.instanceOf, ReferenceError);
  assert.is(a.name, "ReferenceError");

  await assert.notThrowsAsync.skip(Promise.resolve("dummy object"));
  // await assert.notThrowsAsync.skip(Promise.reject('ups'));

  assert.timeout(5 * 1000);
  // await delay(9 * 1000 + 1);
});

test('how "try" works', async (assert) => {
  const cases = [
    [1, 1],
    [1, 1],
    [1, 2],
  ];
  const firstTry = await assert.try((t, [actual, expected]) => {
    t.is(actual, expected);
  }, ...cases);

  assert.log('Passed', firstTry.passed);
  assert.log('Errors', firstTry.errors);

  if (firstTry.passed) {
    firstTry.commit();
  } else {
    firstTry.discard();
  }
});
