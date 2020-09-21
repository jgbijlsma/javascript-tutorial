const person = {
  name: "John Doe",
  age: 25,
  isSubscribed: false,
};

console.log(person);
console.log(person.name);

person.age++;
console.log(person);

person.isLoggedIn = true;
console.log(person);

delete person.isSubscribed;
console.log(person);

console.log(person.isSubscribed);

const isSubscribedExists = "isSubscribed" in person;
console.log(isSubscribedExists);

// for in loop

for (property in person) {
  console.log(property);
}
