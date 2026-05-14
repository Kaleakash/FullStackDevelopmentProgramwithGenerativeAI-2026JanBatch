function withdraw(amount) {
    console.log("This is Bank of Hsbc module");
    console.log("Withdrawing " + amount + " from Bank of Hsbc account");
}
function deposit(amount) {
    console.log("This is Bank of Hsbc module");
    console.log("Depositing " + amount + " to Bank of Hsbc account");
}

module.exports = { withdraw , deposit };