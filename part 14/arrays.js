const myArray = ["Apples", "Pears", "Oranges"];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);

myArray[1] = "Bananas";
console.log(myArray);

myArray[3] = "Pears";
console.log(myArray);

console.log(myArray.length);

myArray[myArray.length] = "Mango";
console.log(myArray);

myArray[myArray.length] = 100;
console.log(myArray);

// array functions

// add to the end of an array: push()
myArray.push("Grapes");
console.log(myArray);

// remove from the end: pop()
let removedItem = myArray.pop();
console.log(myArray);
console.log(removedItem);

// add to the front: unshift()
myArray.unshift("Tomatos");
console.log(myArray);

// remove from front: shift()
removedItem = myArray.shift();
console.log(myArray);
console.log(removedItem);

// get the index of an arry item: indexOf()
const index = myArray.indexOf("Mango");
console.log(index);

// get wether someting is included in the array: includes()
const isIncluded = myArray.includes("Tomatos");
console.log(isIncluded);

// delete (multiple) item(s) at a specific index: splice()
// myArray.splice(index - 1, 2);
// console.log(myArray);

// get (multiple) item(s) in an array: slice()
const items = myArray.slice(1, 5);
console.log(items);
console.log(myArray);
