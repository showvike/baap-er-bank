document.getElementById("btn-deposit").addEventListener("click", function () {
    const depositField = document.getElementById("deposit-amount");
    const depositValue = parseFloat(depositField.value);

    const deposit = document.getElementById("deposit");
    deposit.innerHTML = parseFloat(deposit.innerHTML) + depositValue;

    const balance = document.getElementById("balance");
    balance.innerHTML = parseFloat(balance.innerHTML) + depositValue;

    depositField.value = "";
});
