const form = document.getElementById("registrationForm");

form.onsubmit = function(event) {
    event.preventDefault();

    const password = document.getElementById("password");
    const confirm = document.getElementById("confirmPassword");

    if (password.value !== confirm.value) {
        confirm.setCustomValidity("Passwords do not match");
    } else {
        confirm.setCustomValidity("");
    }

    const fields = form.querySelectorAll(".validation-field");

    let allValid = true;

    for (const field of fields) {
        if (field.checkValidity()) {
            field.classList.add("is-valid");
            field.classList.remove("is-invalid");
        } else {
            field.classList.add("is-invalid");
            field.classList.remove("is-valid");
            allValid = false;
        }
    }

    const gender = form.querySelector('input[name="gender"]:checked');
    const hobbies = form.querySelector('input[name="hobbies"]:checked');

    const genderGroup = document.getElementById("genderGroup");
    const hobbiesGroup = document.getElementById("hobbiesGroup");

    genderGroup.classList.toggle("is-valid", gender !== null);
    genderGroup.classList.toggle("is-invalid", gender === null);

    hobbiesGroup.classList.toggle("is-valid", hobbies !== null);
    hobbiesGroup.classList.toggle("is-invalid", hobbies === null);

    if (!gender || !hobbies) {
        allValid = false;
    }

    const status = document.getElementById("registrationStatus");

    status.textContent = allValid
        ? "Registration form validated successfully!"
        : "Please correct the highlighted fields.";

    status.className = allValid
        ? "text-success mb-0"
        : "text-danger mb-0";
};

form.onreset = function() {
    const fields = form.querySelectorAll(".is-valid, .is-invalid");

    for (const field of fields) {
        field.classList.remove("is-valid", "is-invalid");
    }

    document.getElementById("confirmPassword").setCustomValidity("");
    document.getElementById("registrationStatus").textContent = "";
};
