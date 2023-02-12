document.getElementById("btn-deposit").addEventListener("click", function () {
    const depositField = document.getElementById("deposit-amount");
    const depositValue = parseFloat(depositField.value);
    depositField.value = "";
    if (isNaN(depositValue)) {
        alert("please provide a number!");
        return;
    }

    const deposit = document.getElementById("deposit");
    deposit.innerText = parseFloat(deposit.innerText) + depositValue;

    const balance = document.getElementById("balance");
    balance.innerText = parseFloat(balance.innerText) + depositValue;
});
