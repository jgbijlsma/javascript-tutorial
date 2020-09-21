setInitialDarkMode();

function setInitialDarkMode() {
  let darkModeIsOn = localStorage.getItem("darkModeOn");
  darkModeIsOn = darkModeIsOn === "true";
  if (darkModeIsOn) {
    document.body.classList.add("dark");
  }
}

document.querySelector("#toggle-btn").addEventListener("click", function () {
  const darkModeIsOn = document.body.classList.toggle("dark");
  localStorage.setItem("darkModeOn", darkModeIsOn);
});
