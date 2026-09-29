# SpendWise - Personal Budget & Expense Tracker

## Week 6: JavaScript Foundation

SpendWise is a personal budget and expense tracking web application. The project helps users enter budgeting information, calculate their remaining balance, and record transactions.

This Week 6 assignment adds JavaScript functionality to the existing SpendWise HTML and CSS project.

## Project Files

The project contains the following files:

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### index.html

The `index.html` file provides the structure of the SpendWise application.

It contains:

- SpendWise header
- Budget information section
- Budget input
- Expense input
- Calculate Balance button
- Transaction form
- Description input
- Amount input
- Transaction type
- Category selection
- Date input
- Recent transactions table
- Footer

The JavaScript file is connected using:

```html
<script src="script.js"></script>
```

### style.css

The `style.css` file controls the appearance of the application.

It provides:

- Page layout
- Colors
- Cards
- Forms
- Buttons
- Tables
- Responsive design
- Mobile-friendly layout

### script.js

The `script.js` file contains the JavaScript functionality for SpendWise.

It handles:

- Variables
- Data types
- User input
- Budget calculations
- Functions
- Console output
- Transaction input
- Displaying transactions
- Clearing transactions

---

# JavaScript Concepts Implemented

## 1. Variables

Variables are used to store information that the application needs.

For example:

```javascript
let budget = 50000;
let expenses = 15000;
let remainingBalance = budget - expenses;
```

The `budget` variable stores the available budget.

The `expenses` variable stores the amount spent.

The `remainingBalance` variable stores the amount remaining after expenses are subtracted from the budget.

The project also uses `const` for values that are not reassigned.

Example:

```javascript
const calculateButton = document.getElementById("calculateButton");
```

---

# 2. Data Types

The project demonstrates different JavaScript data types.

### String

```javascript
let appName = "SpendWise";
```

A string stores text.

### Number

```javascript
let defaultBudget = 50000;
```

A number stores numerical values.

### Boolean

```javascript
let isBudgetActive = true;
```

A Boolean stores either `true` or `false`.

---

# 3. Collecting User Input

SpendWise collects user input using JavaScript prompts.

Example:

```javascript
let userBudget = prompt(
    "Enter your budget amount in KES:"
);

let userExpenses = prompt(
    "Enter your total expenses in KES:"
);
```

The user enters their budget and expenses.

The input is converted from text into numbers using:

```javascript
userBudget = Number(userBudget);
userExpenses = Number(userExpenses);
```

The application also collects information from HTML form fields using JavaScript.

For example:

```javascript
const description =
    document.getElementById("description").value;
```

This allows the application to read information entered by the user.

---

# 4. Budget Calculations

SpendWise calculates the remaining balance by subtracting expenses from the budget.

The calculation is:

```text
Remaining Balance = Budget - Expenses
```

For example:

```text
Budget = KES 50,000
Expenses = KES 15,000

Remaining Balance = KES 35,000
```

The JavaScript code performs this calculation using:

```javascript
let remainingBalance = budget - expenses;
```

---

# 5. Reusable Functions

Functions are used to organize the application logic and make code reusable.

SpendWise includes the following budget calculation function:

```javascript
function calculateBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}
```

The function can be called with different values.

Example:

```javascript
calculateBalance(40000, 12000);
```

The result is:

```text
28000
```

Using a function means the same calculation does not need to be written repeatedly.

---

# 6. Console Output

The application displays important information in the browser console.

For example:

```javascript
console.log("Budget:", budget);
console.log("Expenses:", expenses);
console.log("Remaining Balance:", remainingBalance);
```

The console can be opened in the browser using:

```text
F12 → Console
```

The console displays clearly labeled information such as:

```text
========== SpendWise ==========
Application: SpendWise
Budget: 50000
Expenses: 15000
Remaining Balance: 35000
```

---

# 7. Transaction Input

SpendWise allows the user to enter a transaction.

The transaction form collects:

- Description
- Amount
- Transaction Type
- Category
- Date

JavaScript reads the values from the form and adds the transaction to the transaction table.

Example:

```text
Description: Lunch
Amount: KES 500
Type: Expense
Category: Food
Date: 2026-09-29
```

---

# 8. Input Validation

The application checks whether the user has entered valid numbers.

For example:

```javascript
if (amount <= 0 || isNaN(amount)) {
    alert("Please enter a valid amount.");
    return;
}
```

This helps prevent invalid transaction amounts from being added.

---

# 9. Displaying Results

The calculated budget, expenses, and remaining balance are displayed on the webpage.

JavaScript updates the HTML using:

```javascript
document.getElementById("budgetDisplay").textContent =
    "KES " + budgetAmount.toLocaleString();
```

The same approach is used for expenses and the remaining balance.

---

# How to Test the Application

1. Open `index.html` in a web browser.
2. Enter a budget when prompted.
3. Enter your total expenses.
4. Open the browser developer tools.
5. Select the **Console** tab.
6. Check the displayed budget calculation.
7. Enter a transaction in the transaction form.
8. Click **Add Transaction**.
9. Check that the transaction appears in the table.
10. Test the **Clear All** button.
11. Test the application with different budget and expense amounts.

---

# Example Calculation

If the user enters:

```text
Budget: 50000
Expenses: 15000
```

SpendWise calculates:

```text
50000 - 15000 = 35000
```

Therefore:

```text
Remaining Balance: KES 35,000
```

---

# Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

---

# Learning Outcomes

Through this assignment, I practiced:

- Creating and linking a JavaScript file
- Creating variables
- Working with different data types
- Collecting user input
- Converting input into numbers
- Performing mathematical calculations
- Creating reusable functions
- Using `console.log()`
- Reading values from HTML forms
- Updating webpage content with JavaScript
- Adding transactions dynamically
- Validating user input

---

# Conclusion

The Week 6 version of SpendWise changes the project from a mainly visual webpage into an application that can process budgeting information using JavaScript.

The application can collect budget and expense information, calculate the remaining balance, display results in the browser console, and process transaction information entered by the user.