const el = document.createElement("p");
el.innerText = "This is a new paragraph";

console.log(el);

// document.body.append(el);

const title = document.querySelector("#title");
title.after(el);

title.innerText = "This is a new title";

const container = document.querySelector("#container");
container.innerHTML = '<h3>Header</h3><input type="password">';

const buttons = document.querySelectorAll("button.large");
buttons[0].remove();
