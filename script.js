// script.js
const display = document.getElementById('display');

// Append numbers or operators to the display
function appendToDisplay(input) {
    display.value += input;
}

// Clear the entire screen
function clearDisplay() {
    display.value = "";
}

// Delete the last character (Backspace)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    try {
        // eval() takes the string and treats it as a math expression
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500); // Clear error after 1.5s
    }
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker Registered'))
      .catch(err => console.log('Service Worker Fail', err));
  });
}
