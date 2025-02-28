let transactions = [];

function addTransaction() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (description && amount) {
        const transaction = { description, amount, category };
        transactions.push(transaction);
        updateUI();
    }
}

function updateUI() {
    const transactionList = document.getElementById('transaction-list');
    const totalIncomeElement = document.getElementById('total-income');
    const totalExpenseElement = document.getElementById('total-expense');
    const balanceElement = document.getElementById('balance');
    
    transactionList.innerHTML = '';
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.description}: $${transaction.amount} (${transaction.category})`;
        transactionList.appendChild(listItem);

        if (transaction.category === 'income') {
            totalIncome += transaction.amount;
        } else {
            totalExpense += transaction.amount;
        }
    });

    totalIncomeElement.textContent = `$${totalIncome}`;
    totalExpenseElement.textContent = `$${totalExpense}`;
    balanceElement.textContent = `$${totalIncome - totalExpense}`;
}