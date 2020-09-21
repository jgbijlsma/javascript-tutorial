const person = {
  name: "John Doe",
  age: 25,
  income: 2000,
  talk(message) {
    console.log(message);
  },
  increaseIncome(addition) {
    this.income += addition;
  },
  logThis() {
    console.log(this);
  },
};

person.talk("Say this");
person.increaseIncome(200);
console.log(person.income);

person.logThis();

// this keyword

const user = { name: "Peter" };
const admin = { name: "David" };

function getName() {
  console.log(this.name);
}

getName();

user.getName = getName;
admin.getName = getName;

user.getName();
admin.getName();

console.log(this);
