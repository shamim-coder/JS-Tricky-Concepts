const student = {
    // id: 16,
    // name: "Student",
    // balance: 8000,
    expenses: function () {
        this.balance = this.balance - arguments;
        console.log(this.name + " Remaining Balance: ", this.balance, arguments);
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

// Call
student.expenses.call(reza, 700, 250);
student.expenses.call(shamim, 6500, 390);

// Apply
student.expenses.apply(reza, [500, 100, 200]);
