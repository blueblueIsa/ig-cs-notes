export const arithmeticOperators = [
  { symbol: "+", name: "Addition", example: "x ← 5 + 3", result: "8" },
  { symbol: "-", name: "Subtraction", example: "x ← 10 - 4", result: "6" },
  { symbol: "*", name: "Multiplication", example: "x ← 3 * 4", result: "12" },
  { symbol: "/", name: "Division", example: "x ← 15 / 3", result: "5" },
  { symbol: "MOD", name: "Modulus", example: "x ← 17 MOD 5", result: "2" }
];

export const comparisonOperators = [
  { symbol: "=", name: "Equal to", example: "IF x = 5 THEN", result: "Boolean" },
  { symbol: "<>", name: "Not equal to", example: "IF x <> 0 THEN", result: "Boolean" },
  { symbol: ">", name: "Greater than", example: "WHILE x > 0", result: "Boolean" },
  { symbol: "<", name: "Less than", example: "IF age < 18 THEN", result: "Boolean" },
  { symbol: ">=", name: "Greater than or equal", example: "x >= 100", result: "Boolean" },
  { symbol: "<=", name: "Less than or equal", example: "x <= 50", result: "Boolean" }
];