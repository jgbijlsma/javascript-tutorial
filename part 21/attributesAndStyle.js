const el = document.createElement("a");
el.innerText = "Link to google";
el.setAttribute("href", "http://google.com");
el.setAttribute("href", "http://wikipedia.com");

const classList = el.classList;
el.classList.add("link");
el.classList.add("large");
el.classList.toggle("link");
console.log(classList);

const title = document.querySelector("#title");
title.before(el);

title.style.color = "red";
title.style.textDecoration = "underline";
