const student = {
    id: 12,
    balance: 5000,
    expenses: function (expenses) {
        this.balance = this.balance - expenses;
        console.log(this.name + " Remaining Balance: ", this.balance);
    },
};
const reza = {
    id: 16,
    name: "Reza",
    balance: 8000,
};

const shamim = {
    name: "Shamim",
    roll: 25,
    major: "Humanities",
    balance: 12000,
};

const rezaExpenses = student.expenses.bind(reza);

rezaExpenses(500);
rezaExpenses(500);

const shamimExpenses = student.expenses.bind(shamim);

shamimExpenses(1500);
shamimExpenses(2500);
