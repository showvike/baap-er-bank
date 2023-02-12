document.getElementById("btn-deposit").addEventListener("click", function () {
    const depositField = document.getElementById("deposit-amount");
    const depositValue = depositField.value;

    const deposit = document.getElementById("deposit");
    deposit.innerHTML = depositValue;
});
