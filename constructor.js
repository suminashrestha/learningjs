// Constructor: A special method for defining the properties and methods of objects

// Define the Car constructor function
function Car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
}

// Get the number of cars from the user
let numofcars = prompt("Enter the number of cars:");

// Declare an array to store the cars
let cars = [];

// Loop to input details for each car
for (let i = 0; i < numofcars; i++) {
    // Get details for each car from the user
    let make = prompt("Enter the make of car " + (i + 1) + ":");
    let model = prompt("Enter the model of car " + (i + 1) + ":");
    let color = prompt("Enter the color of car " + (i + 1) + ":");

    // Create a new Car object and add it to the array
    cars[i] = new Car(make, model, color);

    // Display the features of the current car
    console.log("\nThe features of Car " + (i + 1) + " are:");
    console.log("Make: " + cars[i].make);
    console.log("Model: " + cars[i].model);
    console.log("Color: " + cars[i].color);
}
