
// let id =100;
// let name = "John Doe";
// let isActive = true;
// let score = 95.5;
// let msg;
// console.log("ID:", id+" type of id:", typeof id);
// console.log("Name:", name+" type of name:", typeof name);
// console.log("Is Active:", isActive+" type of isActive:", typeof isActive);
// console.log("Score:", score+" type of score:", typeof score);
// console.log("Message:", msg+" type of msg:", typeof msg);


// Real-time example: User Profile Management System using Primitive Data Structures

// Primitive data types in JavaScript: string, number, boolean, undefined, null, symbol, bigint

// Example: Creating a user profile with primitive data
let userId = 12345; // number
let userName = "Alice Johnson"; // string
let isVerified = true; // boolean
let accountBalance = 1500.75; // number (float)
let lastLogin = null; // null (no last login yet)
let profileSymbol = Symbol("uniqueProfile"); // symbol
let bigAccountNumber = 123456789012345678901234567890n; // bigint

// Function to display user profile
function displayUserProfile() {
    console.log("=== User Profile ===");
    console.log("User ID:", userId, "(Type:", typeof userId + ")");
    console.log("Name:", userName, "(Type:", typeof userName + ")");
    console.log("Verified:", isVerified, "(Type:", typeof isVerified + ")");
    console.log("Balance: $" + accountBalance, "(Type:", typeof accountBalance + ")");
    console.log("Last Login:", lastLogin, "(Type:", typeof lastLogin + ")");
    console.log("Profile Symbol:", profileSymbol.toString(), "(Type:", typeof profileSymbol + ")");
    console.log("Account Number:", bigAccountNumber.toString(), "(Type:", typeof bigAccountNumber + ")");
}

// Function to update balance (real-time transaction simulation)
function updateBalance(amount, isDeposit) {
    if (isDeposit) {
        accountBalance += amount;
        console.log("Deposited $" + amount + ". New balance: $" + accountBalance);
    } else {
        if (accountBalance >= amount) {
            accountBalance -= amount;
            console.log("Withdrew $" + amount + ". New balance: $" + accountBalance);
        } else {
            console.log("Insufficient funds. Current balance: $" + accountBalance);
        }
    }
}

// Simulate real-time usage
displayUserProfile();

console.log("\n--- Simulating Transactions ---");
updateBalance(500, true); // Deposit
updateBalance(200, false); // Withdraw
updateBalance(2000, false); // Attempt to withdraw more than balance

console.log("\n--- Updated Profile ---");
displayUserProfile();