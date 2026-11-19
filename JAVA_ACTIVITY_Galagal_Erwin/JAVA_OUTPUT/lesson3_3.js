// Lesson 3 challenge: format a four-item order summary (exercises 3k-3n).
const basketballCents = 2 * 2095;
const tshirtCents = 2 * 799;
const itemCents = basketballCents + tshirtCents;
const shippingAndHandlingCents = 2 * 499;
const subtotalCents = itemCents + shippingAndHandlingCents;
const estimatedTaxCents = Math.round(subtotalCents * 0.1);
const totalCents = subtotalCents + estimatedTaxCents;
const money = (cents) => (cents / 100).toFixed(2);

const orderSummary = `Items (4): $${money(itemCents)}
Shipping & handling: $${money(shippingAndHandlingCents)}
Total before tax: $${money(subtotalCents)}
Estimated tax (10%): $${money(estimatedTaxCents)}
Order total: $${money(totalCents)}`;

console.log(orderSummary);
// 3n: Run this to show the complete summary in a popup.
function exercise3n() { alert(orderSummary); }
