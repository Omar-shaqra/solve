// file: worker.js
const { parentPort, workerData } = require("worker_threads");

setTimeout(() => {
  parentPort.postMessage(`${workerData} done`);
}, 2000);
