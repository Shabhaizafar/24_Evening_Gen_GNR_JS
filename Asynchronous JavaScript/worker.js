// worker.js
self.onmessage = function (e) {
  self.postMessage(e.data*2);
};
