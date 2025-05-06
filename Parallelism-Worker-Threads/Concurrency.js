#مثال مختلف عن ال Parallelism
console.time("Total Time");

function task(name, duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} done`);
      resolve();
    }, duration);
  });
}

async function runTasks() {
  await task("Task 1", 2000);
  await task("Task 2", 2000);
  await task("Task 3", 2000);
  console.timeEnd("Total Time"); // Total ~6s
}

runTasks();

