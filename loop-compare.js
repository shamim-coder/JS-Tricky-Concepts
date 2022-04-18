const student = {
    id: 20,
    name: "Shamim Reza",
    Major: "Science",
    balance: 5000,
    subjects: ["english", "math", "calculus", "economics"],
    bestFriend: {
        id: 14,
        balance: 8000,
        name: "Kundu",
        major: "Humanities",
    },
};

// 01.
for (const prop in student) {
    // console.log(prop, student[prop]);
}

// 02.
const keys = Object.keys(student);
for (const key of keys) {
    // console.log(key, student[key]);
}

// 03. by Object.entries
for (const [keys, value] of Object.entries(student)) {
    // console.log(keys, value);
}
