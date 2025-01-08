function convert() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const number = document.getElementById("number").value.trim();

  if (number === "") {
    alert("Please enter a number!");
    return;
  }

  let decimal;

  // Convert the input to decimal
  try {
    switch (from) {
      case "decimal":
        decimal = parseInt(number, 10);
        break;
      case "binary":
        decimal = parseInt(number, 2);
        break;
      case "octal":
        decimal = parseInt(number, 8);
        break;
      case "hexadecimal":
        decimal = parseInt(number, 16);
        break;
      default:
        throw new Error("Invalid input format");
    }

    if (isNaN(decimal)) throw new Error("Invalid number format");
  } catch (error) {
    alert("Error: " + error.message);
    return;
  }

  // Convert decimal to the desired format
  let result;
  switch (to) {
    case "decimal":
      result = decimal.toString(10);
      break;
    case "binary":
      result = decimal.toString(2);
      break;
    case "octal":
      result = decimal.toString(8);
      break;
    case "hexadecimal":
      result = decimal.toString(16).toUpperCase();
      break;
    default:
      alert("Invalid conversion type");
      return;
  }

  document.getElementById("result").textContent = result;
}

function resetFields() {
  document.getElementById("from").value = "decimal";
  document.getElementById("to").value = "binary";
  document.getElementById("number").value = "";
  document.getElementById("result").textContent = "--";
}

function swapFields() {
  const from = document.getElementById("from");
  const to = document.getElementById("to");
  const temp = from.value;
  from.value = to.value;
  to.value = temp;
}
