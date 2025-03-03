const express = require('express');
const app = express();

// Simulating a blocking operation
function blockEventLoop() {
  console.log('Blocking the event loop...');
  const startTime = Date.now();
  while (Date.now() - startTime < 20000) {
    // Busy-waiting for 5 seconds (Blocking)
  }
  console.log('Event loop is free now!');
}

// Route that blocks the event loop
app.get('/block',async (req, res) => {
  await blockEventLoop();
  res.send('Done blocking!');
});

//the solve 
app.get('/blockv2', async (req, res) => {
    console.log('Starting async delay...');
    await new Promise(resolve => setTimeout(resolve, 20000)); // Asynchronous delay
    console.log('Done without blocking!');
    res.send('Done without blocking!');
  });

// Non-blocking route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
  console.log('Non-blocking route called');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// monitor the eventloop
function monitorEventLoop() {
    const start = Date.now();
    setTimeout(() => {
      const delay = Date.now() - start;
      console.log(`Event loop delay: ${delay}ms`);
    }, 1000); // Expected to run in ~1000ms
  }
  
  setInterval(monitorEventLoop, 2000)