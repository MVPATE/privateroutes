const express = require('express');
const app = express();
const port = 3000; // You can change the port if needed

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express! this is my server');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.get('/about', (req, res) => {
    res.send('This is the About page');
  });
  
  app.get('/contact', (req, res) => {
    res.send('This is the Contact page');
  });
  