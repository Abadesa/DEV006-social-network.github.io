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
  const footerLogIn = document.createElement('footer');

  titleLogIn.classList.add('titleLogIn');
  form.classList.add('formLogIn');
  inputEmail.classList.add('inputEmailLogIn');
  inputPass.classList.add('inputPassLogIn');
  buttonLogin.classList.add('buttonLogIn');
  buttonLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const email = inputEmail.value;
    const password = inputPass.value;
    const promesa = logInWithEmail(email, password);
    promesa.then((userCredential) => {
      console.log(userCredential, 'promesa resueltaaaa');
      navigateTo('/feed');
    }).catch((error) => {
      console.log(error, 'esta maaaaal');
      navigateTo('/error');
    });
  });
  buttonReturn.classList.add('returnLogIn');
  forgotPasswordLogIn.classList.add('forgotPassLogIn');
  logoLogIn.classList.add('logoLogIn');
  lineLogIn.classList.add('lineaLogIn');
  googleLogoLogIn.classList.add('googleicon');
  googleLogIn.classList.add('googleLogIn');
  googleLogIn.addEventListener('click', async () => {
    const user = await logInGoogle()
      .then((user1) => {
        return user1;
      });
    localStorage.setItem ("user", JSON.stringify(user.user));
    navigateTo('/feed');
  });
  footerLogIn.classList.add('footerLogIn');

  inputPass.setAttribute('type', 'password');

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
  section.append(logoLogIn, titleLogIn, form, buttonReturn, forgotPasswordLogIn, lineLogIn, googleLogoLogIn, googleLogIn, footerLogIn);

  return section;
}

export default login;
