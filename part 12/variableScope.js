let someValue = 5;

function useValue() {
  console.log(someValue);
}

useValue();

function useLocalValue() {
  let localValue = 10;
  console.log(localValue);
}

useLocalValue();
// console.log(localValue);

if (true) {
  console.log(someValue);
  console.log(localValue);
}
