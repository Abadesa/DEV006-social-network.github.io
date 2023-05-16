// file intersts finished
function interests(navigateTo) {
  const sectionInterests = document.createElement('section');
  const logoInterests = document.createElement('img');
  const textInterests1 = document.createElement('p');
  const textInterests2 = document.createElement('p');
  const buttonCountry = document.createElement('button');
  const buttonCity = document.createElement('button');
  const lineInterests = document.createElement('hr');
  const formInterests = document.createElement('form');
  const inputInterests1 = document.createElement('input');
  const inputInterests2 = document.createElement('input');
  const inputInterests3 = document.createElement('input');
  const inputInterests4 = document.createElement('input');
  const inputInterests5 = document.createElement('input');
  const inputInterests6 = document.createElement('input');
  const inputInterests7 = document.createElement('input');
  const inputInterests8 = document.createElement('input');
  const inputInterests9 = document.createElement('input');
  const inputInterests10 = document.createElement('input');
  const inputInterests11 = document.createElement('input');
  const inputInterests12 = document.createElement('input');
  const buttonInterests = document.createElement('button');
  const footerInterests = document.createElement('footer');

  sectionInterests.classList.add('sectionInterests');
  logoInterests.classList.add('logoInterests');
  textInterests1.classList.add('textInterests1');
  textInterests2.classList.add('textInterests2');
  buttonCountry.classList.add('buttonCountry');
  buttonCity.classList.add('buttonCity');
  lineInterests.classList.add('lineInterests');
  formInterests.classList.add('formInterests');
  inputInterests1.classList.add('inputInterests1');
  inputInterests2.classList.add('inputInterests2');
  inputInterests3.classList.add('inputInterests3');
  inputInterests4.classList.add('inputInterests4');
  inputInterests5.classList.add('inputInterests5');
  inputInterests6.classList.add('inputInterests6');
  inputInterests7.classList.add('inputInterests7');
  inputInterests8.classList.add('inputInterests8');
  inputInterests9.classList.add('inputInterests9');
  inputInterests10.classList.add('inputInterests10');
  inputInterests11.classList.add('inputInterests11');
  inputInterests12.classList.add('inputInterests12');
  buttonInterests.classList.add('buttonInterests');
  footerInterests.classList.add('footerInterests');

  inputInterests1.setAttribute('type', 'radio');
  inputInterests2.setAttribute('type', 'radio');
  inputInterests3.setAttribute('type', 'radio');
  inputInterests4.setAttribute('type', 'radio');
  inputInterests5.setAttribute('type', 'radio');
  inputInterests6.setAttribute('type', 'radio');
  inputInterests7.setAttribute('type', 'radio');
  inputInterests8.setAttribute('type', 'radio');
  inputInterests9.setAttribute('type', 'radio');
  inputInterests10.setAttribute('type', 'radio');
  inputInterests11.setAttribute('type', 'radio');
  inputInterests12.setAttribute('type', 'radio');

  logoInterests.src = './images/cadenas-learnlink.png';
  textInterests1.textContent = 'Choose 4 topics of your interest';
  textInterests2.textContent = 'This will help us personalize your experience';
  buttonCountry.textContent = 'Country';
  buttonCity.textContent = 'City';
  inputInterests1.textContent = 'Art';
  inputInterests2.textContent = 'Recipes';
  inputInterests3.textContent = 'Construction';
  inputInterests4.textContent = 'JavaScript';
  inputInterests5.textContent = 'Ceramics';
  inputInterests6.textContent = 'Motherhood';
  inputInterests7.textContent = 'Languages';
  inputInterests8.textContent = 'Education';
  inputInterests9.textContent = 'Gardening';
  inputInterests10.textContent = 'Design';
  inputInterests11.textContent = 'Hospitality';
  inputInterests12.textContent = 'Technology';
  buttonInterests.textContent = 'Next';
  buttonInterests.addEventListener('click', () => {
    navigateTo('/feed');
  });
  footerInterests.innerHTML = 'App created by Alicia Riquelme, Andrea Gatell and Dorianys Aponte';

  // eslint-disable-next-line max-len
  formInterests.append(buttonCity, buttonCountry, lineInterests, inputInterests1, inputInterests2, inputInterests3, inputInterests4, inputInterests5, inputInterests6, inputInterests7, inputInterests8, inputInterests9, inputInterests10, inputInterests11, inputInterests12, buttonInterests);
  // eslint-disable-next-line max-len
  sectionInterests.append(logoInterests, textInterests1, textInterests2, formInterests, footerInterests);

  return sectionInterests;
}

export default interests;
