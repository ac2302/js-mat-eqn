const solve = require("./solver");

const coefficients = [
	[1, 2],
	[2, -1],
];
const constants = [909, -282];

// expected ans is [69, 420]

const ans = solve(coefficients, constants);

console.log(ans);
