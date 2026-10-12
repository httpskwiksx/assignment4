const form = document.getElementById("contactForm");
const fields = form.querySelectorAll("input, textarea");
const formStatus = document.getElementById("formStatus");

fields.forEach(function (field) {
    const warning = document.createElement("div");
    warning.className = "warning-feedback";
    warning.textContent = "Almost there! Keep going.";
    field.insertAdjacentElement("afterend", warning);
});

function validateField(field) {
    const value = field.value.trim();
    const isValid = field.checkValidity() && value.length > 0;

    let isWarning = false;

    if (!isValid) {
        if (field.id === "name") {
            isWarning = value.length === 1;
        }

        if (field.id === "email") {
            isWarning = value.includes("@");
        }

        if (field.id === "message") {
            isWarning = value.length >= 6 && value.length < 10;
        }
    }

    field.classList.toggle("is-valid", isValid);
    field.classList.toggle("is-warning", isWarning);
    field.classList.toggle("is-invalid", !isValid && !isWarning);

    return isValid;
}

fields.forEach(function (field) {
    field.addEventListener("input", function () {
        validateField(field);
        formStatus.textContent = "";
    });
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let allValid = true;

    fields.forEach(function (field) {
        if (!validateField(field)) {
            allValid = false;
        }
    });

    if (allValid) {
        formStatus.textContent = "Form validated successfully!";
        formStatus.className = "text-success mb-0";
    } else {
        formStatus.textContent = "Please complete all fields correctly.";
        formStatus.className = "text-danger mb-0";
    }
});
