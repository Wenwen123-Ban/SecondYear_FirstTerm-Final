// Lesson 3 continued: exact cents and formatted receipt (exercises 3g-3j).
const coffeeCents = 599;
const bagelCents = 295;
const totalCents = coffeeCents + bagelCents;
const exactTotal = (totalCents / 100).toFixed(2);
const concatenatedReceiptLine = "Total cost: $" + exactTotal;
const receiptLine = `Total cost: $${exactTotal}`;

console.log("3g:", concatenatedReceiptLine);
console.log("3h:", receiptLine);
function exercise3i() { alert(receiptLine); }

const receipt = receiptLine + "\nThank you, come again!";
function exercise3j() { alert(receipt); }
