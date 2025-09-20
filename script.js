let display = document.getElementById("display");

// Append number/operator
function appendChar(char) {
  display.value += char;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}


// Square root
function sqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

// Calculate result
function calculate() {
  try {
    // Replace % with /100 for percentage
    let expression = display.value.replace(/%/g, "/100");
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}

// ✅ Memory Functions
function memoryAdd() {
  if (display.value !== "") {
    let current = parseFloat(eval(display.value)); // evaluate expression first
    if (!isNaN(current)) {
      memory += current;
      display.value = ""; // optional: clear after adding to memory
    }
  }
}

function memorySubtract() {
  if (display.value !== "") {
    let current = parseFloat(eval(display.value));
    if (!isNaN(current)) {
      memory -= current;
      display.value = ""; // optional: clear after subtracting
    }
  }
}

function memoryRecall() {
  display.value = memory;
}

function memoryClear() {
  memory = 0;
  display.value = ""; // optional: clear display
}



// ✅ Keyboard support
document.addEventListener("keydown", function(event) {
  if (event.key >= 0 && event.key <= 9 || "+-*/.%".includes(event.key)) {
    appendChar(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    deleteChar();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});