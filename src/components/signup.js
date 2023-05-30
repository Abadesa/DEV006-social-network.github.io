/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import { logInGoogle, signUpWithEmail, createUser } from '../lib/firebase.js';

// file signup finished
function signUp(navigateTo) {
  const sectionSignUp = document.createElement('section');
  const logoSignUp = document.createElement('img');
  const textSignUp = document.createElement('p');
  const titleSignUp = document.createElement('h2');
  const buttonReturnSignUp = document.createElement('button');
  const formSignUp = document.createElement('form');
  const inputEmailSignUp = document.createElement('input');
  const fullNameSignUp = document.createElement('input');
  const userNameSignUp = document.createElement('input');
  const inputPassSignUp = document.createElement('input');
  const inputPassRepeat = document.createElement('input');
  const buttonSignUp = document.createElement('button');
  const lineSignUp = document.createElement('hr');
  const googleLogoSignUp = document.createElement('img');
  const googleSignUp = document.createElement('p');
  // const warningsSignUp = document.createElement('p');
  const footerSignUp = document.createElement('footer');

  logoSignUp.classList.add('logoSignUp');
  textSignUp.classList.add('textSignUp');
  titleSignUp.classList.add('titleSignUp');
  buttonReturnSignUp.classList.add('buttonReturnSignUp');
  buttonSignUp.classList.add('buttonSignUp');
  inputEmailSignUp.classList.add('inputEmailSignUp');
  fullNameSignUp.classList.add('fullNameSignUp');
  userNameSignUp.classList.add('userNameSignUp');
  inputPassSignUp.classList.add('inputPassSignUp');
  inputPassRepeat.classList.add('inputPassRepeat');
  lineSignUp.classList.add('lineSignUp');
  googleLogoSignUp.classList.add('googleLogoSignUp');
  googleSignUp.classList.add('googleSignUp');
  googleSignUp.addEventListener('click', async () => {
    const userSu = await logInGoogle()
      .then((user2) => {
        console.log(user2);
      });
    console.log(userSu);
    navigateTo('/confirmation');
  });
  footerSignUp.classList.add('footerSignUp');

  inputPassSignUp.setAttribute('type', 'password');
  inputPassRepeat.setAttribute('type', 'password');
  inputEmailSignUp.setAttribute('name', 'inputEmailSignUp');
  inputPassSignUp.setAttribute('name', 'inputPassSignUp');
  fullNameSignUp.setAttribute('name', 'fullNameSignUp');
  userNameSignUp.setAttribute('name', 'userNameSignUp');

  inputEmailSignUp.placeholder = ' Email';
  fullNameSignUp.placeholder = ' Full name';
  userNameSignUp.placeholder = ' Username';
  inputPassSignUp.placeholder = ' Password';
  inputPassRepeat.placeholder = ' Repeat password';

  logoSignUp.src = '../components/images/logo-learnlin-color.png';
  textSignUp.textContent = 'Find thousands of courses!';
  buttonSignUp.textContent = 'Register';

  buttonSignUp.addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.querySelector('form');
    const email = form.inputEmailSignUp.value;
    const password = form.inputPassSignUp.value;
    /* let warnings = '';
    let entrar = false;
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    warningsSignUp.innerHTML = '';
    if (!regexEmail.test(inputEmailSignUp.value)) {
      warnings += 'This is not a valid email <br>';
      entrar = true;
    }
    if (inputPassSignUp.value.length < 8) {
      warnings += 'Password must contain at least 8 characters <br>';
      entrar = true;
    }
    if (entrar) {
      warningsSignUp.innerHTML = warnings;
    } else {
      navigateTo('/confirmation');
    } */
    console.log(email, password);
    const userAuth = await signUpWithEmail(email, password);
    console.log(userAuth);
    const userDataBase = {
      email,
      name: form.fullNameSignUp.value,
      username: form.userNameSignUp.value,
    };
    console.log(userDataBase);
    createUser(userDataBase);
    navigateTo('/confirmation');
  });

  googleLogoSignUp.src = '../components/images/Google.png';
  googleSignUp.textContent = 'Register with Google';
  footerSignUp.innerHTML = 'Do you already have an account? <span class="subrayado">Log in</span>';
  footerSignUp.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonReturnSignUp.textContent = 'Return';
  buttonReturnSignUp.addEventListener('click', () => {
    navigateTo('/');
  });

  // eslint-disable-next-line max-len
  formSignUp.append(inputEmailSignUp, fullNameSignUp, userNameSignUp, inputPassSignUp, inputPassRepeat, buttonSignUp);
  // eslint-disable-next-line max-len
  sectionSignUp.append(logoSignUp, textSignUp, googleLogoSignUp, googleSignUp, lineSignUp, formSignUp, footerSignUp);

  return sectionSignUp;
}
export default signUp;
