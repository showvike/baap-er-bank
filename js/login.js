document.getElementById("btn-submit").addEventListener("click", function () {
    const emailForm = document.getElementById("user-email");
    const email = emailForm.value;

    const passwordForm = document.getElementById("user-password");
    const password = passwordForm.value;

    if (email === "sontan@baap.com" && password === "secret") console.log("valid user");
    else console.log("invalid user");
});
