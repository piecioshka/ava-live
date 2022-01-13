require("isomorphic-fetch");
const test = require("ava");
const nock = require("nock");
const { makeRequest } = require("./makeRequest");

const exampleDomain = "https://fakes.herokuapp.com";
const examplePath = "/products";
const exampleUrl = exampleDomain + examplePath;

test("does makeRequest make a request", async (assert) => {
  nock(exampleDomain).get(examplePath).reply(200, { message: "hello world" });
  const response = await makeRequest(exampleUrl);
  assert.is(response.message, "hello world");
});
