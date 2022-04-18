const obj1 = {
    a: 10,
    b: 20,
};
const obj2 = {
    a: 10,
    b: 20,
};

// console.log(obj1 === obj2);   // output false

const obj3 = obj1;

// console.log(obj3 === obj1); // output true

// 03.

function compareObject() {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
const result = compareObject();
console.log(result);
