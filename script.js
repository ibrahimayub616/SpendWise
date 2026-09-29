// ==========================================
// SpendWise - JavaScript Foundation
// Week 6 Assignment
// ==========================================


// ==========================================
// 1. APPLICATION VARIABLES
// ==========================================

// Budget-related variables
let budget = 50000;
let expenses = 15000;

// Calculate the starting balance
let remainingBalance = budget - expenses;


// ==========================================
// 2. DATA TYPES
// ==========================================

// String
let appName = "SpendWise";

// Number
let defaultBudget = 50000;

// Boolean
let isBudgetActive = true;


// ==========================================
// 3. BUDGET CALCULATION FUNCTION
// ==========================================

function calculateBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}


// ==========================================
// 4. DISPLAY STARTING RESULTS IN CONSOLE
// ==========================================

console.log("========== SpendWise ==========");
console.log("Application:", appName);
console.log("Budget:", budget);
console.log("Expenses:", expenses);
console.log("Remaining Balance:", remainingBalance);
console.log("Budget Active:", isBudgetActive);


// ==========================================
// 5. USER INPUT USING PROMPTS
// ==========================================

// Ask the user for their budget
let userBudget = prompt(
    "Enter your budget amount in KES:"
);

// Ask the user for their expenses
let userExpenses = prompt(
    "Enter your total expenses in KES:"
);


// ==========================================
// 6. CONVERT USER INPUT TO NUMBERS
// ==========================================

if (userBudget !== null && userExpenses !== null) {

    userBudget = Number(userBudget);
    userExpenses = Number(userExpenses);


    // ==========================================
    // 7. VALIDATE USER INPUT
    // ==========================================

    if (
        !isNaN(userBudget) &&
        !isNaN(userExpenses) &&
        userBudget >= 0 &&
        userExpenses >= 0
    ) {

        // ==========================================
        // 8. PERFORM CALCULATION
        // ==========================================

        let userBalance = calculateBalance(
            userBudget,
            userExpenses
        );


        // ==========================================
        // 9. DISPLAY RESULT IN CONSOLE
        // ==========================================

        console.log("========== User Budget ==========");
        console.log("User Budget:", userBudget);
        console.log("User Expenses:", userExpenses);
        console.log("Remaining Balance:", userBalance);


        // ==========================================
        // 10. DISPLAY RESULT ON WEBPAGE
        // ==========================================

        document.getElementById("budgetDisplay").textContent =
            "KES " + userBudget.toLocaleString();

        document.getElementById("expenseDisplay").textContent =
            "KES " + userExpenses.toLocaleString();

        document.getElementById("balanceDisplay").textContent =
            "KES " + userBalance.toLocaleString();

    } else {

        console.log("Please enter valid numbers for budget and expenses.");

    }

}


// ==========================================
// 11. CALCULATE BUTTON
// ==========================================

const calculateButton =
    document.getElementById("calculateButton");


calculateButton.addEventListener("click", function () {

    const budgetInput =
        document.getElementById("budgetInput").value;

    const expenseInput =
        document.getElementById("expenseInput").value;


    const budgetAmount = Number(budgetInput);
    const expenseAmount = Number(expenseInput);


    if (
        budgetInput === "" ||
        expenseInput === "" ||
        isNaN(budgetAmount) ||
        isNaN(expenseAmount)
    ) {

        alert("Please enter both budget and expense amounts.");

        return;
    }


    if (budgetAmount < 0 || expenseAmount < 0) {

        alert("Amounts cannot be negative.");

        return;
    }


    const balance =
        calculateBalance(
            budgetAmount,
            expenseAmount
        );


    // Update webpage
    document.getElementById("budgetDisplay").textContent =
        "KES " + budgetAmount.toLocaleString();

    document.getElementById("expenseDisplay").textContent =
        "KES " + expenseAmount.toLocaleString();

    document.getElementById("balanceDisplay").textContent =
        "KES " + balance.toLocaleString();


    // Display results in console
    console.log("========== Budget Calculation ==========");
    console.log("Budget:", budgetAmount);
    console.log("Expenses:", expenseAmount);
    console.log("Remaining Balance:", balance);

});


// ==========================================
// 12. TRANSACTION FORM
// ==========================================

const transactionForm =
    document.getElementById("transactionForm");

const transactionTableBody =
    document.getElementById("transactionTableBody");


// ==========================================
// 13. ADD TRANSACTION
// ==========================================

transactionForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Collect user input
    const description =
        document.getElementById("description").value;

    const amount =
        Number(document.getElementById("amount").value);

    const transactionType =
        document.getElementById("transactionType").value;

    const category =
        document.getElementById("category").value;

    const date =
        document.getElementById("date").value;


    // Validate amount
    if (amount <= 0 || isNaN(amount)) {

        alert("Please enter a valid amount.");

        return;
    }


    // Remove "No transactions yet"
    const emptyMessage =
        document.getElementById("emptyMessage");

    if (emptyMessage) {
        emptyMessage.remove();
    }


    // Create a new table row
    const row =
        document.createElement("tr");


    row.innerHTML = `
        <td>${description}</td>
        <td>KES ${amount.toLocaleString()}</td>
        <td>${transactionType}</td>
        <td>${category}</td>
        <td>${date}</td>
    `;


    // Add row to table
    transactionTableBody.appendChild(row);


    // Display transaction in console
    console.log("========== New Transaction ==========");
    console.log("Description:", description);
    console.log("Amount:", amount);
    console.log("Type:", transactionType);
    console.log("Category:", category);
    console.log("Date:", date);


    // Clear form
    transactionForm.reset();

});


// ==========================================
// 14. CLEAR ALL TRANSACTIONS
// ==========================================

const clearButton =
    document.getElementById("clearButton");


clearButton.addEventListener("click", function () {

    transactionTableBody.innerHTML = `
        <tr id="emptyMessage">
            <td colspan="5">
                No transactions yet
            </td>
        </tr>
    `;


    console.log("All transactions have been cleared.");

});