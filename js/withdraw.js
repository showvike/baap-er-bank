document.getElementById("btn-withdraw").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-amount");
    const withdrawValue = parseFloat(withdrawField.value);
    withdrawField.value = "";
    if (isNaN(withdrawValue)) {
        alert("please provide a number!");
        return;
    }

    if (withdrawValue > parseFloat(document.getElementById("balance").innerText)) {
        alert("baaper bank er eto tk nai!");
        return;
    }

    const withdraw = document.getElementById("withdraw");
    withdraw.innerText = parseFloat(withdraw.innerText) + withdrawValue;

    const balance = document.getElementById("balance");
    balance.innerText = parseFloat(balance.innerText) - withdrawValue;
});
