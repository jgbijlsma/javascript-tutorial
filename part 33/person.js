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

export { Person, Employee };
