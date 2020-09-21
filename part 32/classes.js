class Person {
  constructor(name, income, balance) {
    this.name = name;
    this.income = income;
    this.balance = balance;
  }

  spendMoney(amount) {
    this.balance -= amount;
  }
}

class Employee extends Person {
  earnMoney(amount) {
    this.balance += amount;
  }

  spendMoney(amount) {
    this.balance -= amount * 0.8;
  }
}

const peter = new Person("Peter Smith", 2000, 5000);
const john = new Person("John Doe", 4000, 10000);
const jane = new Person("Jane Doe", 2500, 100000);

const david = new Employee("David Baker", 3000, 8000);

console.log(peter);
peter.spendMoney(600);
console.log(peter);

console.log(david);
david.earnMoney(david.income);
console.log(david);
david.spendMoney(500);
console.log(david);

if (peter instanceof Employee) {
  console.log("Peter is an employee");
} else {
  console.log("Peter is not an employee");
}

if (david instanceof Employee) {
  console.log("David is an employee");
} else {
  console.log("David is not an employee");
}
