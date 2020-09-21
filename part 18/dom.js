console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const body = document.body;

const firstNode = body.firstChild;
console.log(firstNode);
const lastNode = body.lastChild;
console.log(lastNode);

const bodyNodes = body.childNodes;
console.log(bodyNodes);

// for (let i = 0; i < bodyNodes.length; i++) {
//   console.log(bodyNodes[i]);
// }

const nextNode = firstNode.nextSibling;
console.log(nextNode);
console.log(nextNode.previousSibling);
console.log(nextNode.parentNode);

// elements

const firstElement = body.firstElementChild;
console.log(firstElement);
const lastElement = body.lastElementChild;
console.log(lastElement);
const nextElement = firstElement.nextElementSibling;
console.log(nextElement);
