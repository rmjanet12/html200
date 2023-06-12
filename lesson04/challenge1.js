function squareNumber() {
    let number = prompt("Enter a number:");
    let squaredNumber = number * number;
    alert("The square of " + number + " is " + squaredNumber);
  }

  document.getElementById("squareButton").addEventListener("click", squareNumber);