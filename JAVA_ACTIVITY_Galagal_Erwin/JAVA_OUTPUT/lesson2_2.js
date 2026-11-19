// Lesson 2 continued: Amazon order calculations (exercises 2f-2i).
// Work in cents so the displayed values are exact.
const basketballsCents = 2 * 2095;
const tshirtsCents = 2 * 799;
const itemsCents = basketballsCents + tshirtsCents;
const shippingCents = 2 * 499;
const beforeTaxCents = itemsCents + shippingCents;
const taxCents = Math.round(beforeTaxCents * 0.1);
const orderTotalCents = beforeTaxCents + taxCents;

console.log("2f: Products before shipping and tax: $" + (itemsCents / 100).toFixed(2));
console.log("2g: Total before tax: $" + (beforeTaxCents / 100).toFixed(2));
console.log("2h: 10% tax: $" + (taxCents / 100).toFixed(2));
console.log("2i: Order total: $" + (orderTotalCents / 100).toFixed(2));
