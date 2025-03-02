const inputE1 = document.querySelector("#name-input");
const outputE1 = document.querySelector("#name-output");
inputE1.addEventListener("input", onInputChange);
function onInputChange(event) {
  const trimmedValue = event.target.value.trim();
  outputE1.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
}
