const fs = require("fs");
fs.writeFileSync("Hello.txt", "Hello from Node.js");

const addFun = (a, b) => a + b;
console.log(addFun(3, 4));

const Student = {
  name: "Abhishek",
  age: 20,
  grade: 9,
  greet() {
    console.log(`Hii, I am ${Student.name}`);
  },
};

Student.greet();
