/**
 * ENTRAINEMENT #5
 */

// Sélectionner le champs texte du nom
const lastName = document.querySelector("#lastname");

// Applique un écouteur d'évènement sur les changements effectués dans le champs
lastName.addEventListener('input', () => {
    // Vérifie si le champs est vide ou pas
    const response = notEmpty(lastName.value);

    // Gestion de l'erreur
    isError("Le nom est obligatoire", response, "lastname");
});

/**
 * Vérification du prénom
 */
const firstName = document.querySelector("#firstname");
firstName.addEventListener('input', () => {
    const response = notEmpty(firstName.value);
    isError("Le prénom est obligatoire", response, "firstname");
});

/**
 * Vérification du pseudo
 */
const pseudo = document.querySelector("#pseudo");
pseudo.addEventListener("input", () => {
    const response = notEmpty(pseudo.value);
    isError("Le pseudo est obligatoire", response, "pseudo");

    if (response) {
        const length = isLength(pseudo.value, 5);
        isError("Le pseudo doit comporter 5 caractères min.", length, "pseudo");
    }
});

/**
 * Vérification de l'adresse e-mail
 */
const email = document.querySelector("#email");
email.addEventListener("input", () => {
    const response = notEmpty(email.value);
    isError("L'adresse email est obligatoire", response, "email");

    if (response) {
        const checkEmail = isEmail(email.value);
        isError("L'adresse email est invalide", checkEmail, "email");
    }
});


/**
 * Vérification du mot de passe
 */
const password = document.querySelector("#password");
password.addEventListener("input", () => {
    const response = notEmpty(password.value);
    isError("Le mot de passe est obligatoire", response, "password");
 
    if (response) {
        const length = isLength(password.value, 6);
        isError("Le mot de passe doit comporter 6 caractères min.", length, "password");
    }
});

/**
 * Vérification de la confirmation du mot de passe
 */
const confirmPwd = document.querySelector("#confirmPassword");
confirmPwd.addEventListener("input", () => {
    const response = notEmpty(confirmPwd.value);
    isError("La confirmation du mot de passe est obligatoire", response, "confirmPassword");

    if (response) {
        const equal = isEqual(password.value, confirmPwd.value);
        isError("Les mots de passe ne correspondent pas", equal, "confirmPassword");
    }
});

// Empêche de coller une valeur dans le champs
confirmPwd.addEventListener("paste", (event) => {
    event.preventDefault();
});


// Sélectionne TOUS les éléments ayant la classe CSS "view-password"
const eyes = document.querySelectorAll(".view-password");

// Applique un écouteur d'évènement à chaque éléments récupérés
eyes.forEach(eye => {
    eye.addEventListener("click", () => {
        // Appelle une fonction permettant de faire apparaitre/disparaitre
        // le mot de passe

        // "previousElementSibling" permet de récupérer l'élément du DOM juste au-dessus
        let input = eye.previousElementSibling;
        let type = showHidePassword(input);
        input.type = type;
    });
});

// Sélectionne le lien permettant de lancer la génération du mot de passe
const link = document.querySelector('#generatePwd');
link.addEventListener("click", () => {
    const passGenerate = generatePassword(12);

    const result = document.querySelector("#resultPassword");
    result.innerText = passGenerate;
});
