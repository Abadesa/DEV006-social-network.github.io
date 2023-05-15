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
  buttonReturn.classList.add('returnLogIn');
  forgotPasswordLogIn.classList.add('forgotPassLogIn');
  logoLogIn.classList.add('logoLogIn');
  lineLogIn.classList.add('lineaLogIn');
  googleLogoLogIn.classList.add('googleicon');
  googleLogIn.classList.add('googleLogIn');
  footerLogIn.classList.add('footerLogIn');

  inputPass.setAttribute('type', 'password');

  inputEmail.placeholder = ' Write email';
  inputPass.placeholder = ' Password';

  logoLogIn.src = './images/logo-learlink-vertical.png';
  titleLogIn.textContent = 'Welcome to LearnLink';
  buttonLogin.textContent = 'Log in';
  googleLogoLogIn.src = './images/Google.png';
  googleLogIn.textContent = 'Log in with Google';
  forgotPasswordLogIn.textContent = 'Did you forget your password?';
  footerLogIn.innerHTML = 'You do not have an account? <span class="subrayado"> Register</span>';

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
