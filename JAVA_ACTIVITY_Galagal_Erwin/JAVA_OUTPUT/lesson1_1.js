// Lesson 1 continued: 1f-1j.
const studentName = "ERWIN GALAGAL";

// 1f-1g: Run one function at a time in a browser page.
function exercise1f() { document.body.innerHTML = "Good morning!"; }
function exercise1g() { document.body.innerHTML = studentName; }

// 1h-1i: Calculate the order cost and remaining bank balance.
const orderTotal = 10 + 8 + 20;
console.log("1h: Order total:", orderTotal);

const moneyLeft = 100 - 20 - 50 + 200;
console.log("1i: Money remaining:", moneyLeft);

// 1j: Run this statement to make the web page blank.
function exercise1j() { document.body.innerHTML = ""; }
