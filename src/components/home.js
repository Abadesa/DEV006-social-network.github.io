// file main.js finished
function home(navigateTo) {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  const title = document.createElement('h2');
  const paragraph = document.createElement('p');
  const button = document.createElement('button');
  const line = document.createElement('hr');
  const button2 = document.createElement('button');
  const footer = document.createElement('footer');

  logo.classList.add('logoVertical');
  title.classList.add('tituloBienvenida');
  paragraph.classList.add('textoBienvenida');
  button.classList.add('botonLogIn');
  button2.classList.add('botonSignUp');
  footer.classList.add('footerBienvenida');
  line.classList.add('lineaBienvenida');

  button.textContent = 'Log in';
  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  button2.textContent = 'Register';
  button2.addEventListener('click', () => {
    navigateTo('/signup');
  });

  // eslint-disable-next-line no-useless-escape
  logo.src = './components/images/logo-learlink-vertical.png';
  title.textContent = 'Welcome to LearnLink';
  paragraph.textContent = 'Find thousands of courses close to you';
  footer.innerHTML = '<p>Please review our <span class="subrayado"> privacy policy</span></p>';

  section.append(logo, title, paragraph, button, line, button2, footer);
  return section;
}

export default home;
