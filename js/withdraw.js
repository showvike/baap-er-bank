document.getElementById("btn-withdraw").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-amount");
    const withdrawValue = parseFloat(withdrawField.value);

    const withdraw = document.getElementById("withdraw");
    withdraw.innerHTML = parseFloat(withdraw.innerHTML) + withdrawValue;

    const balance = document.getElementById("balance");
    balance.innerHTML = parseFloat(balance.innerHTML) - withdrawValue;

    withdrawField.value = "";
});
