function toCase(text) {
  // Check for empty string
  if (text === "") {
    return "-";
  }

  // Return lowercase and uppercase versions joined by a hyphen
  return text.toLowerCase() + "-" + text.toUpperCase();
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));

