const [display] = document.getElementsByTagName("input");

const updateDisplay = (value) => {
  display.value = String(value).replace(".", ",");
};

let total = 0;
let number = "0";
let operation = null;
updateDisplay(number);

/**
 *
 * Cand se apasa pe un numar.
 */
const updateNumber = (n) => {
  if (number === "0" || number == null) {
    number = n;
  } else {
    number = number.concat(n);
  }

  updateDisplay(number);
};

const addEvents = (num) => {
  const button = document.getElementById(num);

  button.addEventListener("click", () => {
    updateNumber(num);
  });
};

for (let i = 0; i <= 9; i++) {
  addEvents(String(i));
}

/**
 * Cand se apasa pe virgula
 */
const virgula = document.getElementById("vir");

virgula.addEventListener("click", () => {
  if (!number.includes(",")) {
    number = number.concat(",");
  }

  updateDisplay(number);
});

/**
 * Cand se apasa pe delete
 */
const deleteNumbers = document.getElementById("del");

deleteNumbers.addEventListener("click", () => {
  number = "0";
  operation = null;
  updateDisplay(number);
});

/**
 * Cand se apasa pe operatie
 */
const operations = ["+", "*", "/", "-"];

const calculate = () => {
  number = number.replace(",", ".");
  switch (operation) {
    case "+":
      return total + Number(number);
    case "-":
      return total - Number(number);
    case "/":
      return total / Number(number);
    case "*":
      return total * Number(number);
    default:
      return Number(number);
  }
};

for (const op of operations) {
  const el = document.getElementById(op);

  el.addEventListener("click", () => {
    if (number) {
      total = calculate();
      updateDisplay(total);
    }

    operation = op;
    number = null;
  });
}

const result = document.getElementById("res");

result.addEventListener("click", () => {
  if (number) {
    total = calculate();
    updateDisplay(total);
  }

  operation = null;
  number = null;
});

const negativ = document.getElementById("net");

negativ.addEventListener("click", () => {
  if (number === null) {
    total = -total;

    updateDisplay(total);
  } else {
    if (number && number.includes("-")) {
      number = number.substring(1);
    } else {
      if (number !== "0") {
        number = "-" + number;
      }
    }

    updateDisplay(number);
  }
});

const procent = document.getElementById("proc");

procent.addEventListener("click", () => {
  if (number) {
    number = number / 100;
    updateDisplay(number);
  } else {
    total = total / 100;
    updateDisplay(total);
  }
});
