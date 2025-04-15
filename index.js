const bankAccount = {
    balance: 0,
    transactions: [],
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        this.transactions.push({
          type: "deposit",
          amount: amount,
          date: new Date().toLocaleString()
        });
        alert(`Deposited: $${amount}\nNew Balance: $${this.balance}`);
      } else {
        alert("Please enter a valid amount.");
      }
    },
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        this.transactions.push({
          type: "withdraw",
          amount: amount,
          date: new Date().toLocaleString()
        });
        alert(`Withdrawn: $${amount}\nNew Balance: $${this.balance}`);
      } else {
        alert("Insufficient funds or invalid amount.");
      }
    },
  
    checkBalance() {
      alert(`Your current balance is: $${this.balance}`);
    },
  
    viewTransactionHistory() {
      if (this.transactions.length === 0) {
        alert("No transactions yet.");
      } else {
        let history = "Transaction History:\n\n";
        this.transactions.forEach((tx, index) => {
          history += `${index + 1}. ${tx.type.toUpperCase()} - $${tx.amount} on ${tx.date}\n`;
        });
        alert(history);
      }
    }
  };
  
  // App logic
  let isRunning = true;
  
  while (isRunning) {
    const choice = prompt(
      "Welcome to the Bank App!\nWhat would you like to do?\n\n1: Deposit\n2: Withdraw\n3: Check Balance\n4: View Transaction History\n5: Exit"
    );
  
    switch (choice) {
      case "1":
        const depositAmount = parseFloat(prompt("Enter amount to deposit:"));
        bankAccount.deposit(depositAmount);
        break;
  
      case "2":
        const withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
        bankAccount.withdraw(withdrawAmount);
        break;
  
      case "3":
        bankAccount.checkBalance();
        break;
  
      case "4":
        bankAccount.viewTransactionHistory();
        break;
  
      case "5":
        isRunning = false;
        alert("Thanks for using the Bank App. Goodbye!");
        break;
  
      default:
        alert("Invalid choice. Please try again.");
    }
  }
  