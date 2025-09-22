let string = "";
let memory = 0; // memory storage
let input = document.querySelector('input');
let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerHTML;

    // Equal Button
    if (e.target.classList.contains('equal')) {
      try {
        string = eval(string); // evaluate the expression
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } 
    // Clear Button
    else if (e.target.classList.contains('bg-red')) {
      string = "";
      input.value = "";
    } 
    // Memory Buttons
    else if (e.target.classList.contains('memory')) {
      try {
        if (value === "M+") {
          memory += Number(eval(string) || 0);
          input.value = `M+ = ${memory}`;
        } else if (value === "M-") {
          memory -= Number(eval(string) || 0);
          input.value = `M- = ${memory}`;
        }
        string = "";
      } catch {
        input.value = "Error";
        string = "";
      }
    } 
    // Operators and Numbers
    else {
      string += value;
      input.value = string;
    }
  });
});
