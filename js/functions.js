/**
 * FONCTIONS JS
 */

/**
 * Gestion des erreurs du formulaire
 * 
 * @param {string} message
 * @param {boolean} success
 * @param {string} id
 */
const isError = (message, success, id) => {
    // Récupère le champ input
    const input = document.querySelector(`#${id}`);

    // Récupère la balise contenant le message d'erreur
    const messageError = document.querySelector(`#${id}Error`);

    // Affiche une erreur
    input.style.border = "2px solid red";
    messageError.innerText = message;
    messageError.style.display = "block";

    // Affiche un succès
    if (success) {
        input.style.border = "2px solid green";
        messageError.style.display = "none";
    }
}

/**
 * Vérifie que la donnée reçue ne soit pas vide
 * 
 * @param {string} value 
 * @returns {boolean}
 */
const notEmpty = (value) => {
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof
    if (typeof value !== "string" || value.length === 0) {
        return false;
    }

    return true;
}

/**
 * Vérifie la longueur d'une chaîne de caractère
 * 
 * @param {string} value Chaîne de caractère à évaluer
 * @param {int} min Longueur min. à atteindre
 * @returns {boolean}
 */
const isLength = (value, min) => {
    return value.length >= min;
}

/**
 * Vérifie la validité d'une adresse e-mail
 * 
 * @param {string} value
 * @returns {boolean}
 */
const isEmail = (value) => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,10}$/;
    return pattern.test(value);
}

/**
 * Vérifie si deux chaînes de caractères correspondent
 * 
 * @param {string|int} value
 * @param {string|int} confirmValue
 * @returns {boolean}
 */
const isEqual = (value, confirmValue) => {
    return value === confirmValue;
}

/**
 * Affiche/cache le mot de passe
 * 
 * @param {Element} element
 * @returns {string}
 */
let showHidePassword = (element) => {
    // if ternaire
    return (element.type === "password") ? "text" : "password";

    /* 
    let type;
    if (element.type === "password") {
        type = "text";
    }
    else {
        type = "password";
    } 
    return type;
    */
}

/**
 * Génère un mot de passe aléatoire
 * 
 * @params {int} min
 * @returns {string}
 */
const generatePassword = (min = 18) => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@&-_!?$#+=*";
    let password = '';

    for (let i = 0; i < min; i++) {
        password += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return password;
}
