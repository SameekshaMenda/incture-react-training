# 🧠 JavaScript Basics – Learning Notes

This repository contains beginner-friendly JavaScript code examples with explanations. Topics include `var`, `let`, `const`, data types, operators, conditionals, arrays, loops, and a palindrome check.

## 1. `var`, `let`, and `const`

### var
- ✅ Function-scoped  
- ✅ Can be redeclared  
- ✅ Can be reinitialized  

```javascript
if (true) {
    var x = 10;
    console.log("x:", x);
    x = 20;
}
console.log("x:", x); // accessible outside block
```

### let
- ✅ Block-scoped

- ✅ Can be reinitialized

- ❌ Cannot be redeclared in same scope

```javascript

if (true) {
    let x = 10;
    console.log("x:", x);
    x = 20;
    // let x = 30; ❌ SyntaxError: Identifier 'x' has already been declared
}
```

### const
- ✅ Block-scoped

- ❌ Cannot be reinitialized

- ❌ Cannot be redeclared

```javascript
if (true) {
    const x = 10;
    console.log("x:", x);
    // x = 30; ❌ TypeError: Assignment to constant variable
}
```
## 2. JavaScript Data Types
```javascript
let x = 10;                     // Number
let y = "ABN";                  // String
let z = true;                   // Boolean
let n = null;                   // Null
let t;                          // Undefined
let a = 999999999999999999999n; // BigInt

console.log(typeof a); // "bigint"
```

## 3. Operators
Ternary Operator
```javascript
let age = 30;
(age > 18) ? console.log("Eligible") : console.log("Not eligible");
```

## 4. Conditional Statements
if...else if...else
```javascript
let marks = 75;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Fail");
}
```
switch
```javascript
let choice = 5;

switch (choice) {
    case 1: console.log("Case 1 Executed..."); break;
    case 2: console.log("Case 2 Executed..."); break;
    case 3: console.log("Case 3 Executed..."); break;
    case 4: console.log("Case 4 Executed..."); break;
    default: console.log("Enter a valid input");
}
```
## 5. Arrays
Declaration
```javascript
let num = [10, 20, 30];
let num1 = new Array(10, 20, 40);
console.log(num, num1);
```
Access & Length
```javascript
let data = [90, 60, 40, 70, 10, 80, 20];
console.log(data.length);
```
Looping through array
```javascript
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

for (let x of data) {
    console.log(x);
}
```
Array Methods
```javascript
data.push(89);         // Add to end
data.unshift(400);     // Add to start
data.pop();            // Remove from end
data.shift();          // Remove from start
console.log(data.indexOf(10));       // First index of 10
console.log(data.lastIndexOf(10));   // Last index of 10
data.sort();           // Sort array
data.reverse();        // Reverse array
```
