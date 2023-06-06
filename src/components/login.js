/* eslint-disable no-console */
import { logInGoogle, logInWithEmail } from '../lib/firebase';

// file login finished
function login(navigateTo) {
  const section = document.createElement('section');
  const logoLogIn = document.createElement('img');
  const titleLogIn = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const forgotPasswordLogIn = document.createElement('p');
  const lineLogIn = document.createElement('hr');
  const googleLogoLogIn = document.createElement('img');
  const googleLogIn = document.createElement('p');
  const warningsLogIn = document.createElement('p');
  const footerLogIn = document.createElement('footer');

  warningsLogIn.setAttribute('id', 'warningsLogIn');
  warningsLogIn.setAttribute('for', 'warningsLogIn');
  form.setAttribute('id', 'form');
  form.setAttribute('for', 'form');
  inputEmail.setAttribute('id', 'inputEmail');
  inputEmail.setAttribute('for', 'inputEmail');
  inputEmail.setAttribute('type', 'email');
  inputPass.setAttribute('id', 'inputPass');
  inputPass.setAttribute('for', 'inputPass');
  inputPass.setAttribute('type', 'password');

  titleLogIn.classList.add('titleLogIn');
  form.classList.add('formLogIn');

  inputEmail.classList.add('inputEmailLogIn');
  inputPass.classList.add('inputPassLogIn');
  buttonLogin.classList.add('buttonLogIn');
  buttonLogin.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.removeItem('user');
    const email = inputEmail.value;
    const password = inputPass.value;
    let warnings = '';
    let entrar = false;
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    warningsLogIn.innerHTML = '';
    if (!regexEmail.test(inputEmail.value)) {
      warnings += 'This is not a valid email <br>';
      entrar = true;
    }
    if (inputPass.value.length < 8) {
      warnings += 'Password must contain at least 8 characters <br>';
      entrar = true;
    }
    if (entrar) {
      warningsLogIn.innerHTML = warnings;
    } else {
      navigateTo('/feed');
    }
    console.log('funciona');
    const promesa = logInWithEmail(email, password);
    promesa.then((userCredential) => {
      localStorage.setItem('user', JSON.stringify(userCredential.user));
      navigateTo('/feed');
    }).catch((error) => {
      console.log(error, 'esta maaaaal');
    });
  });

  buttonReturn.classList.add('returnLogIn');
  forgotPasswordLogIn.classList.add('forgotPassLogIn');
  logoLogIn.classList.add('logoLogIn');
  lineLogIn.classList.add('lineaLogIn');
  googleLogoLogIn.classList.add('googleicon');
  googleLogIn.classList.add('googleLogIn');
  googleLogIn.addEventListener('click', async () => {
    localStorage.removeItem('user');
    const user = await logInGoogle()
      .then((user1) => user1);
    localStorage.setItem('user', JSON.stringify(user.user));
    navigateTo('/feed');
  });
  warningsLogIn.classList.add('warningsLogIn');
  footerLogIn.classList.add('footerLogIn');

  inputEmail.placeholder = ' Email';
  inputPass.placeholder = ' Password';

  logoLogIn.src = '../components/images/logo-learlink-vertical.png';
  titleLogIn.textContent = 'Welcome to LearnLink';
  buttonLogin.textContent = 'Log in';
  googleLogoLogIn.src = '../components/images/Google.png';
  googleLogIn.textContent = 'Log in with Google';
  forgotPasswordLogIn.textContent = 'Did you forget your password?';
  footerLogIn.innerHTML = 'You do not have an account? <span class="subrayado"> Register</span>';
  footerLogIn.addEventListener('click', () => {
    navigateTo('/signup');
  });

  buttonReturn.textContent = 'Return';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(inputEmail, inputPass, buttonLogin);
  // eslint-disable-next-line max-len
  section.append(logoLogIn, titleLogIn, form, buttonReturn, forgotPasswordLogIn, lineLogIn, googleLogoLogIn, googleLogIn, warningsLogIn, footerLogIn);

  return section;
}

export default login;
