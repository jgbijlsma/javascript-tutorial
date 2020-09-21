let input = prompt("What is your country of residence?");

if (input === "The Netherlands" || input === "Belgium") {
  alert("Your delivery is on it's way!");
} else {
  alert("We don't deliver to " + input);
}
