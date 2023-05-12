// file signup finished
function signUp(navigateTo) {
  const sectionSignUp = document.createElement('section');
  const titleSignUp = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const formSignUp = document.createElement('form');
  const inputEmailSignUp = document.createElement('input');
  const inputPassSignUp = document.createElement('input');
  const buttonSignUp = document.createElement('button');

  inputEmailSignUp.placeholder = 'Write email';
  inputPassSignUp.placeholder = 'Password';

  titleSignUp.textContent = 'Sign Up';
  buttonSignUp.textContent = 'go';

  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  formSignUp.append(inputEmailSignUp, inputPassSignUp, buttonSignUp);
  sectionSignUp.append(titleSignUp, formSignUp, buttonReturn);

  return sectionSignUp;
}

export default signUp;
