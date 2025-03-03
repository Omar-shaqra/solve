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
    await new Promise(resolve => setTimeout(resolve, 5000)); // Asynchronous delay
    res.send('Done without blocking!');
  });

// Non-blocking route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
