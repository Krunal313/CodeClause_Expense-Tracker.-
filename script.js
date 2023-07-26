const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

expenseForm.addEventListener('submit', addExpense);

function addExpense(event) {
    event.preventDefault();

    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');

    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid expense name and amount.');
        return;
    }

    const li = document.createElement('li');
    li.innerText = `${expenseName} - $${expenseAmount.toFixed(2)}`;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteButton);
    expenseList.appendChild(li);

    expenseNameInput.value = '';
    expenseAmountInput.value = '';
}
