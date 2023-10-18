// public/script.js

// Select the SVG container for the pendulum
const svg = d3.select('svg');

// Define the pendulum's properties
const pivotX = 400; // x-coordinate of the pivot point
const pivotY = 50;  // y-coordinate of the pivot point
const rodLength = 150;
const pendulumBobRadius = 10;

// Initialize the pendulum's angle
let angle = Math.PI / 4; // Initial angle (45 degrees)

// Function to update the pendulum's position
function updatePendulum() {
  // Calculate the position of the pendulum bob
  const bobX = pivotX + rodLength * Math.sin(angle);
  const bobY = pivotY + rodLength * Math.cos(angle);

  // Update the pendulum's position
  svg.selectAll('line').remove(); // Remove previous pendulum line
  svg.append('line')
    .attr('x1', pivotX)
    .attr('y1', pivotY)
    .attr('x2', bobX)
    .attr('y2', bobY)
    .attr('stroke', 'black')
    .attr('stroke-width', 2);

  // Update the angle based on server data
  // Here, you would typically fetch the angle data from the server
  // and update the 'angle' variable accordingly.
  // For this example, we'll update the angle slightly to demonstrate animation.
  angle += 0.01;
}

// Function to continuously update the pendulum
function animatePendulum() {
  setInterval(() => {
    updatePendulum();
  }, 50); // Adjust the interval as needed for animation speed
}

// Start the pendulum animation
animatePendulum();
