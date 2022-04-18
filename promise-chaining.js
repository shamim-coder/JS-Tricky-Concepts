console.log("welcome");

const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 1 Complete");
    });
};
const taskTwo = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 2 Complete");
    });
};
const taskThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 3 Complete");
        }, 2000);
    });
};
const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 4 Complete");
    });
};

taskOne()
    .then((res) => console.log(res))
    .then(taskTwo)
    .then((res) => console.log(res))
    .then(taskThree)
    .then((res) => console.log(res))
    .then(taskFour)
    .then((res) => console.log(res));

console.log("end");
