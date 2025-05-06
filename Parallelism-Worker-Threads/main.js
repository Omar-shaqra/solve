// file: main.js
const { Worker } = require("worker_threads");

console.time("Total Time");

function runWorker(taskName) {
  return new Promise((resolve) => {
    const worker = new Worker("./worker.js", { workerData: taskName });
    worker.on("message", (msg) => {
      console.log(msg);
      resolve();
    });
  });
}

async function runParallelTasks() {
  await Promise.all([
    runWorker("Task 1"),
    runWorker("Task 2"),
    runWorker("Task 3"),
  ]);
  console.timeEnd("Total Time"); // Total ~2s
}

runParallelTasks();
