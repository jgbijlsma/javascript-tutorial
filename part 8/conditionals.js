let checkNumber = true;
let val1 = 6;
let val2 = 5;

if (checkNumber) {
  if (val1 === val2) {
    console.log("Both are equal");
  } else if (val1 < val2) {
    console.log("val1 is smaller");
  } else {
    console.log("val1 is larger");
  }
}

console.log("Done");

let price = 5;
let name = "John Doe";

if (name === "John Doe" && price < 10) {
  console.log("You are John Doe, and the price is low enough");
}

if (name === "John Doe" || price < 10) {
  console.log("You are John Doe, or the price is low enough");
}
