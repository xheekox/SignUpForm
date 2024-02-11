const password_elmnt = document.getElementById("password");
const confirm_password_elmnt = document.getElementById("confirmpass");



[ password_elmnt, confirm_password_elmnt].forEach(function(element) {
    element.addEventListener("input", (event) =>
    {
        if(!(confirm_password_elmnt.value === password_elmnt.value))
        {
            confirm_password_elmnt.setCustomValidity("Passwords are not identical");
        } else {
            confirm_password_elmnt.setCustomValidity("");
        }
    })
});