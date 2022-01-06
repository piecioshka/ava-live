// TODO: how to run ESM with AVA v4.x?
// import test from "ava";
const test = require("ava");
const { TaskManager } = require("./task-manager");

test("TM should add one task", (t) => {
  const tm = new TaskManager();
  tm.add('first', () => {
    console.log('A) this is first task');
  });
  t.is(tm.list().length, 1);
});

test('TM should add two tasks', (t) => {
  const tm = new TaskManager();
  tm.add('first', () => {
    console.log('B) this is first task');
  });
  tm.add('second', () => {
    console.log('B) this is the second task');
  });
  t.is(tm.list().length, 2);
});

test('TM should invoke all tasks and clear list of tasks', (t) => {
  const tm = new TaskManager();
  tm.add('first', () => {
    console.log('C) this is first task');
  });
  tm.add('second', () => {
    console.log('C) this is the second task');
  });
  t.is(tm.list().length, 2);
  tm.run(() => {
    t.is(tm.list().length, 0);
  });
});
