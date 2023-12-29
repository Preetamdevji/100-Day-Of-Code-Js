// Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operator to determine the tax rate.

function calculateTax(income) {
    const taxRate = income <= 50000 ? 0.1 : income <= 100000 ? 0.15 : 0.2;

    const taxAmount = income * taxRate;
    return taxAmount;
}

const income1 = 45000;
const tax1 = calculateTax(income1);
console.log(`Tax for income $${income1} is $${tax1}`);

const income2 = 75000;
const tax2 = calculateTax(income2);
console.log(`Tax for income $${income2} is $${tax2}`);

const income3 = 120000;
const tax3 = calculateTax(income3);
console.log(`Tax for income $${income3} is $${tax3}`);
