// Lesson 3: Strings (exercises 3a-3f).
const namePrefix = "My name is: ";
const studentName = "ERWIN GALAGAL";
const greeting = namePrefix + studentName;

console.log("3a:", namePrefix);
console.log("3b:", studentName);
console.log("3c:", greeting);

const coffeeAndBagel = 5 + 3;
const totalText = "Total cost: $" + coffeeAndBagel;
console.log("3d:", totalText);

// 3e: Use a template string and interpolation.
const templateStringResult = `Total cost: $${coffeeAndBagel}`;
console.log("3e:", templateStringResult);

// 3f: Run this to show the text from 3e in a popup.
function exercise3f() { alert(templateStringResult); }
