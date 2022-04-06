/**
 * ENTRAINEMENT #5
 */

// Selectionner le champs texte du nom
const lastName = document.querySelector("#lastname");

// Apllique un ecouteur d'evenement sur les chamgements
// effectues dans le champs
lastName.addEventListener("input", () => {
  const response = notEmpty(lastName.value);

  // Geston de l'Erreur
  isError("Votre nom est obligatoire", response, "lastname");

  //Recupere le champs pour gerer l'erreur si bosoin

  const error = document.querySelector("#lastnameError");

  if (response) {
    // Affiche des vordures vertes so tout va bien
    lastName.style.border = "2px solid green";
    error.style.display = "none";
  } else {
    //Affiche un message d'erreur si tout ne va pas bien :(
    error.innerText = "Le nom est obligatoire";
    error.style.display = "block";
    lastName.style.border = "2px solid red";
  }
});

const firstName = document.querySelector("#firstname");
firstName.addEventListener("input", () => {
  const response = notEmpty(firstName.value);
  isError("Votre pernom est obligatoire", response, "firstname");
});
// Verifie du pseudo

const pseudo = document.querySelector("#pseudo");
pseudo.addEventListener("input", () => {
  const response = notEmpty(pseudo.value);
  isError("Votre pseudo est obligatoire", response, "pseudo");
  if (response) {
    const length = isLength(pseudo.value, 5);
    isError("Votre pseudo doit comporter 5 characters min", length, "pseudo");
  }
});

const email = document.querySelector("#email");
email.addEventListener("input", () => {
  const response = notEmpty(email.value);
  isError("Votre email est obligatoire", response, "email");

  if(response){
const checkEmail = isEmail(email.value);
isEmail("L'address email est invalide", checkEmail, "email");
  }
});

const password = document.querySelector("#password");
password.addEventListener("input", () => {
  const response = notEmpty(password.value);
  isError("Votre password est obligatoire", response, "password");
  if (response) {
    const length = isLength(password.value, 6);
    isError("Votre password doit comporter 6 characters min", length, "password");
  }
  
});

const confirmPassword = document.querySelector("#confirmPassword");
confirmPassword.addEventListener("input", () => {
  const response = notEmpty(confirmPassword.value);
  isError(
    "Votre confirm password est obligatoire",
    response,
    "confirmPassword");

  if(response){
    const equal = isEqual(password.value, confirmPassword.value);
    isError("Les lots de passe ne correspondent pas", equal, "confirmPassword");
  }
});

confirmPassword.addEventListener("paste", (event) => {
  event.preventDefault();
});

/**
 * selectionne tous les elements ayant la classe CSS "bi-eye"
 */
const eyes = document.querySelectorAll(".view-password");

// Applique un ecouter d'eventement a chaque elements recupres

eyes.forEach(eye => {
  eye.addEventListener("click", () => {
    // Appelle un functions parametrant de faire apparataire/ disparaire
    // le mot de pass 

    // "previousElementSibling" parmet de recuperer l'element du DOM juste au desus
    let input = eye.previousElementSibling; 
    let type = showHidePassword(input);
    input.type = type;
    
  });
});
