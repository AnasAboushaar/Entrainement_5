/**
 * FONCTIONS JS
 *
 */
/**
 *
 * @param {string} message
 * @param {boolean} success
 * @param {string}id
 */
const isError = (message, success, id) => {
  //Recupire le champ input
  const input = document.querySelector(`#${id}`);
  // Recupire le balise contement le message d'erreur
  const messageError = document.querySelector(`#${id}Error`);
  //Affiche un erreur
  input.style.border = "2px solid red";
  messageError.innerText = message;
  messageError.style.display = "block";
  //Affiche un success
  if (success) {
    input.style.border = "2px solid green";
    messageError.style.display = "none";
  }
};
/**
 *
 *@param {string} value
 *@return {boolean}
 */
/**
 * Verifie que la donne recue ne soit pas vide
 */
const notEmpty = (value) => {
  if (typeof value !== "string" || value.length === 0) {
    return false;
  }

  return true;
};

/**
 * Verifie le longuer d'une chaine de character
 * @param {string} value chaine de character a evaleur
 * @param {int} min longeur min. a atteindre
 *
 * @return {boolean}
 */
const isLength = (value, min) => {
  return value.length >= min;
};
/**
 * Verifie le validite d'une adresse e-mail
 * @param {string} value
 * @return {boolean}
 */
const isEmail = (value) => {
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,10}$/;
  return pattern.test(value);
};

/**
 * Verifie si deux chaines de caractres correcepedent
 * @param {string|int} value
 * @param {string|int} confirmValue
 * @return {boolean}
 */
const isEqual = (value, confirmValue) => {
  return value === confirmValue;
}

/**
 * 
 * @param {Element} element 
 * @returns {string}
 */

const showHidePassword = (element) => {
return (element.type === "password") ? "text" : "password";};
 //if(element.type === "password"){
//element.type = "text";
 //} else {
   //element.type = "password";
 //}
 //return type
//}
