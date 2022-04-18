const student = {
    id: 025,
    name: "Shamim Reza",
    Major: "Science",
    balance: 5000,
    subjects: ["english", "math", "calculus", "economics"],
    bestFriend: {
        id: 016,
        balance: 8000,
        name: "Kundu",
        major: "Humanities",
        takeExam: function () {
            console.log(this.name, "taking exam");
        },
        helpingByMoney: function (money) {
            student.balance = student.balance + money;
            this.balance = this.balance - money;
        },
    },
    // object method
    takeExam: function () {
        console.log(this.name, "taking exam");
    },
    treatDay: function (expenses) {
        this.balance = this.balance - expenses;
        return this.balance;
    },
};

// student.takeExam();
// student.bestFriend.takeExam();

const remaining = student.treatDay(1500);
const remaining2 = student.treatDay(3000);
student.treatDay(2500);
// console.log(student);

student.bestFriend.helpingByMoney(4000);
student.bestFriend.helpingByMoney(1200);

console.log(student.balance);
console.log(student.bestFriend.balance);
