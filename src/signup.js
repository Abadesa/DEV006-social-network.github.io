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
  footerSignUp.classList.add('footerSignUp');

  inputPassSignUp.setAttribute('type', 'password');
  inputPassRepeat.setAttribute('type', 'password');

  inputEmailSignUp.placeholder = ' Write email';
  fullNameSignUp.placeholder = ' Full name';
  userNameSignUp.placeholder = ' Username';
  inputPassSignUp.placeholder = ' Password';
  inputPassRepeat.placeholder = ' Repeat password';

  logoSignUp.src = './images/logo-learnlin-color.png';
  // titleSignUp.textContent = 'Sign Up to LearnLink';
  textSignUp.textContent = 'Find thousands of courses!';
  buttonSignUp.textContent = 'Register';
  buttonSignUp.addEventListener('click', () => {
    navigateTo('/confirmation');
  });
  googleLogoSignUp.src = './images/Google.png';
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
