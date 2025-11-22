document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-blance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);

    if (amount && pin) {
      if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount;
        // console.log(sum);
        document.getElementById("main-blance").innerText = sum;
      }
    } else {
      alert("enter amount");
    }
  });
