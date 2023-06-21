let balance = 0;

function withdraw(amount) {
    if (balance >= amount) {
        balance -= amount;
        return true;
    } else {
        return false;
    }
}

function deposit(amount) {
    balance += amount;
    return true;
}

function viewBalance() {
    return balance;
}

function startBankApp() {
    let option = prompt("Enter an action (W: Withdraw, D: Deposit, B: View Balance, Q: Quit)");

    while (option !== 'Q') {
        switch (option) {
            case 'W':
                let withdrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
                if (withdraw(withdrawAmount)) {
                    alert(`Successfully withdrew $${withdrawAmount}`);
                } else {
                    alert("Insufficient funds!");
                }
                break;
            case 'D':
                let depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
                deposit(depositAmount);
                alert(`Successfully deposited $${depositAmount}`);
                break;
            case 'B':
                alert(`Your balance is $${viewBalance()}`);
                break;
            default:
                alert("Invalid option!");
        }

        option = prompt("Enter an action (W: Withdraw, D: Deposit, B: View Balance, Q: Quit)");
    }

    alert("Bank application has been closed.");
}

startBankApp();