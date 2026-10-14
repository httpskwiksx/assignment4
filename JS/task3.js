const form = document.getElementById("contactForm");

form.onsubmit = function(event) {
    event.preventDefault();

    const fields = form.querySelectorAll("input, textarea");

    for (const field of fields) {
        if (field.checkValidity()) {
            field.classList.add("is-valid");
            field.classList.remove("is-invalid");
        } else {
            field.classList.add("is-invalid");
            field.classList.remove("is-valid");
        }
    }
};
