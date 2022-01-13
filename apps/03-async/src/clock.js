const ONE_SECOND = 1000;

class Clock {
  tick(cb) {
    setTimeout(cb, ONE_SECOND);
  }
  tickPromise() {
    return new Promise((resolve) => {
      setTimeout(resolve, ONE_SECOND);
    });
  }
}

module.exports = {
  Clock,
};
