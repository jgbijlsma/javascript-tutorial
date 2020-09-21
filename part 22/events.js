function buttonClick() {
  console.log("You clicked");
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", buttonClick);

const box = document.querySelector("#box");

box.addEventListener("mouseenter", boxEnter);
function boxEnter() {
  box.style.background = "red";
}

box.addEventListener("mouseout", boxOut);
function boxOut() {
  box.style.background = "orange";
}

document.addEventListener("keypress", onKeyPress);
function onKeyPress(e) {
  if (e.key === "g") {
    document.body.style.background = "green";
  } else if (e.key === "y") {
    document.body.style.background = "yellow";
  } else if (e.key === "w") {
    document.body.style.background = "white";
  }
}

const form = document.querySelector("#user-form");
form.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();

  const usernameInput = document.querySelector("#username");
  const messageContainer = document.createElement("div");
  messageContainer.innerHTML = `<h3>Welcome ${usernameInput.value}</h3>`;
  form.before(messageContainer);
}
