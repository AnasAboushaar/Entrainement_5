let inputs = document.querySelectorAll('input[data-validate="true"]');

inputs.forEach(input => {
    input.addEventListener("input", () => {
        validateValue(input);
    });
});

let validateValue = (input) => {
    const value = input.value;

    // Check is not empty
    if (input.dataset.required === "true") {
        const messageError = input.dataset.requiredMessage;
        notEmpty(value) ? false : errors(input, messageError) ;
    }
}

let notEmpty = (value) => {
    return value.length > 0;
}

let errors = (input, message) => {
    let error = document.createElement("p");
    error.innerText = message ?? "Le champs est obligatoire";
    error.style.display = "block";
    input.after(error);
}