require("isomorphic-fetch");
const test = require("ava");
const nock = require("nock");
const { of } = require("rxjs");
const { filter, map } = require("rxjs/operators");
const { makeRequest$ } = require("./makeRequest$");

const exampleDomain = "https://fakes.piecioshka.io";
const examplePath = "/products";
const exampleUrl = exampleDomain + examplePath;

test("handles observables", (assert) => {
  assert.plan(3);
  return of(1, 2, 3, 4, 5, 6).pipe(
    filter((n) => {
      // Only even numbers
      return n % 2 === 0;
    }),
    map(() => assert.pass())
  );
});

test("does makeRequest$ make a request", (assert) => {
  assert.plan(1);
  nock(exampleDomain).get(examplePath).reply(200, { message: "hello world" });
  return makeRequest$(exampleUrl).pipe(
    map((response) => {
      assert.is(response.message, "hello world");
    })
  );
});
