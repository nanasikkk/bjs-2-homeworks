"use strict";

function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    return [root];
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyInterestRate = percent / 100 / 12;
  let loanAmount = amount - contribution;
  let monthlyPayment = loanAmount * (monthlyInterestRate + monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1));
  let totalPayment = monthlyPayment * countMonths;

  return parseFloat(totalPayment.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));