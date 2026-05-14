function withdraw(amount) {
    console.log("This is Bank of America module");
    console.log("Withdrawing " + amount + " from Bank of America account");
}

function deposit(amount) {
    console.log("This is Bank of America module");
    console.log("Depositing " + amount + " to Bank of America account");
}
module.exports = { withdraw , deposit };