const display = document.querySelector(".display");

function appendDisplay(input) {
  display.textContent += input;
}

function clearDisplay() {
  display.textContent = "";
}

function calculate() {
  try {
    display.textContent = eval(display.textContent).toFixed(2);
  } catch (error) {
    display.textContent = "ERROR";
  }
}
