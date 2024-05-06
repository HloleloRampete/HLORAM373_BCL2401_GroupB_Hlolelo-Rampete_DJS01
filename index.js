/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors - in the 'calcNewVel' function, the velocity is given in km/h, but the acceleration is given in m/s^2, and the time is given in seconds. 
 * To make the calculation consistent, you'll need to convert the velocity to m/s and the time to hours.
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Pick up an error with how the function below is called and make it robust to such errors
// Define the calcNewVel function
const calcNewVel = (vel, acc, time) => { 
   return vel + ((acc*time)*3.6); //converts velocity to m/s and time to hours
  }


// Given Parameters Initialize
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


const newVel = calcNewVel(vel, acc, time) //calculates new velocity based on acceleration

const d2 = d + ((vel*time)/3600) //calcultes new distance

const rf = (fbr*time)* //calculates remaining fuel

// Log the results 
console.log(`Corrected New Velocity: ${newVel} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);