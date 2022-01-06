class TaskManager {
  #queue = [];

  add(name, fn) {
    this.#queue.push({
      name,
      fn,
    });
  }
  list() {
    return this.#queue;
  }
  run(cb) {
    while (this.#queue.length) {
      this.#queue.pop().fn();
    }
    cb();
  }
}

module.exports = {
  TaskManager,
};
