// server.js

// Import necessary packages
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define the length of the pendulum and initial conditions
const l = 1.0; // Length of the pendulum
let theta = Math.PI / 4; // Initial angle (45 degrees)
let thetaDot = 0; // Initial angular velocity

// Time variables
const dt = 0.05; // Time step
const totalTime = 10; // Total simulation time (adjust as needed)
let currentTime = 0;

// Differential equation solver (Euler's method)
function solveDifferentialEquation() {
  const thetaDoubleDot = (-theta / l) * Math.sin(theta);
  thetaDot += thetaDoubleDot * dt;
  theta += thetaDot * dt;
  currentTime += dt;
}

// Set up the server
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Simulation loop
setInterval(() => {
  if (currentTime <= totalTime) {
    solveDifferentialEquation();
  } else {
    // Reset the simulation
    theta = Math.PI / 4; // Reset the angle
    thetaDot = 0; // Reset the angular velocity
    currentTime = 0; // Reset time
  }
}, dt);
