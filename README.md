# calculator
# Advanced Calculator with Memory Functions

A **web-based calculator** built using **HTML, CSS, JavaScript, and DOM**.  
This calculator supports **basic arithmetic operations, square root, percentage calculations**, and **memory operations** similar to a real calculator.

---

## Features

### Basic Operations
- Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`)
- Decimal calculations
- Clear (`C`) and Delete (`DEL`) buttons

### Advanced Operations
- Square root (`√`)
- Percentage (`%`)

### Memory Operations
- **M+** → Add displayed number to memory  
- **M-** → Subtract displayed number from memory  
- **MR** → Recall memory value  
- **MC** → Clear memory  

### Keyboard Support
- Numbers and operators (`+ - * / % .`) can be typed from keyboard
- `Enter` → Calculate result (`=`)
- `Backspace` → Delete last character
- `Escape` → Clear display

---

## Layout
- 5 columns grid layout for buttons
- Memory operations have their **own column**
- Zero button spans two columns
- Display shows current input

**Button arrangement:**

| Row | Buttons |
|-----|---------|
| 1   | C, DEL, %, /, M+ |
| 2   | 7, 8, 9, *, M- |
| 3   | 4, 5, 6, -, MR |
| 4   | 1, 2, 3, +, MC |
| 5   | √, 0 (span 2), ., = |

---

## Demo

![Calculator Demo] <img width="1920" height="1008" alt="Screenshot 2025-09-20 190951" src="https://github.com/user-attachments/assets/4f805f9e-05fe-4994-adfc-24a1a3021053" />

---

## How to Use

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Use the buttons or keyboard to perform calculations.
4. Use memory buttons (M+, M-, MR, MC) for advanced memory operations.

---

## File Structure

