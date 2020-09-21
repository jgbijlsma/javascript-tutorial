const animal = {
  eat() {
    console.log("The aminal is eating");
  },
};

const fish = {
  swim() {
    console.log("The fish is swimming");
  },
};

fish.__proto__ = animal;

fish.swim();
fish.eat();
