// file confirmation finished
function confirmation(navigateTo) {
  const sectionConfirmation = document.createElement('section');
  const logoConfirmation = document.createElement('img');
  const textConfirmation1 = document.createElement('p');
  const textConfirmation2 = document.createElement('p');
  const buttonConfirmation = document.createElement('button');
  const lineConfirmation = document.createElement('hr');
  const footerConfirmation = document.createElement('footer');

  sectionConfirmation.classList.add('sectionConfirmation');
  logoConfirmation.classList.add('logoConfirmation');
  textConfirmation1.classList.add('textConfirmation1');
  textConfirmation2.classList.add('textConfirmation2');
  buttonConfirmation.classList.add('buttonConfirmation');
  lineConfirmation.classList.add('lineConfirmation');
  footerConfirmation.classList.add('footerConfirmation');

  logoConfirmation.src = '../components/images/email.png';
  textConfirmation1.textContent = 'We sent you an email to verify your data';
  textConfirmation2.textContent = "Check your inbox, if you didn't receive an email, please check your spam folder";
  buttonConfirmation.textContent = 'Next';
  buttonConfirmation.addEventListener('click', () => {
    navigateTo('/interests');
  });
  footerConfirmation.innerHTML = 'App created by Alicia Riquelme, Andrea Gatell and Dorianys Aponte';

  // eslint-disable-next-line max-len
  sectionConfirmation.append(logoConfirmation, textConfirmation1, textConfirmation2, buttonConfirmation, lineConfirmation, footerConfirmation);

  return sectionConfirmation;
}

export default confirmation;
