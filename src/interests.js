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
  const container = document.createElement('div');
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
  const labelInterests1 = document.createElement('label');
  const labelInterests2 = document.createElement('label');
  const labelInterests3 = document.createElement('label');
  const labelInterests4 = document.createElement('label');
  const labelInterests5 = document.createElement('label');
  const labelInterests6 = document.createElement('label');
  const labelInterests7 = document.createElement('label');
  const labelInterests8 = document.createElement('label');
  const labelInterests9 = document.createElement('label');
  const labelInterests10 = document.createElement('label');
  const labelInterests11 = document.createElement('label');
  const labelInterests12 = document.createElement('label');
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

  inputInterests1.setAttribute('id', 'inputInterests1');
  inputInterests2.setAttribute('id', 'inputInterests2');
  inputInterests3.setAttribute('id', 'inputInterests3');
  inputInterests4.setAttribute('id', 'inputInterests4');
  inputInterests5.setAttribute('id', 'inputInterests5');
  inputInterests6.setAttribute('id', 'inputInterests6');
  inputInterests7.setAttribute('id', 'inputInterests7');
  inputInterests8.setAttribute('id', 'inputInterests8');
  inputInterests9.setAttribute('id', 'inputInterests9');
  inputInterests10.setAttribute('id', 'inputInterests10');
  inputInterests11.setAttribute('id', 'inputInterests11');
  inputInterests12.setAttribute('id', 'inputInterests12');

  // Labels
  labelInterests1.setAttribute('for', 'inputInterests1');
  labelInterests2.setAttribute('for', 'inputInterests2');
  labelInterests3.setAttribute('for', 'inputInterests3');
  labelInterests4.setAttribute('for', 'inputInterests4');
  labelInterests5.setAttribute('for', 'inputInterests5');
  labelInterests6.setAttribute('for', 'inputInterests6');
  labelInterests7.setAttribute('for', 'inputInterests7');
  labelInterests8.setAttribute('for', 'inputInterests8');
  labelInterests9.setAttribute('for', 'inputInterests9');
  labelInterests10.setAttribute('for', 'inputInterests10');
  labelInterests11.setAttribute('for', 'inputInterests11');
  labelInterests12.setAttribute('for', 'inputInterests12');

  // Textos
  logoInterests.src = './images/cadenas-learnlink.png';
  textInterests1.textContent = 'Choose 4 topics of your interest';
  textInterests2.textContent = 'This will help us personalize your experience';
  buttonCountry.textContent = 'Country';
  buttonCity.textContent = 'City';
  labelInterests1.textContent = 'Art';
  labelInterests2.textContent = 'Recipes';
  labelInterests3.textContent = 'Construction';
  labelInterests4.textContent = 'JavaScript';
  labelInterests5.textContent = 'Ceramics';
  labelInterests6.textContent = 'Motherhood';
  labelInterests7.textContent = 'Languages';
  labelInterests8.textContent = 'Education';
  labelInterests9.textContent = 'Gardening';
  labelInterests10.textContent = 'Design';
  labelInterests11.textContent = 'Hospitality';
  labelInterests12.textContent = 'Technology';
  buttonInterests.textContent = 'Next';
  buttonInterests.addEventListener('click', () => {
    navigateTo('/feed');
  });
  footerInterests.innerHTML = 'App created by Alicia Riquelme, Andrea Gatell and Dorianys Aponte';

  // Agregar el label y el input al contenedor
  // eslint-disable-next-line max-len
  container.append(inputInterests1, labelInterests1, inputInterests2, labelInterests2, inputInterests3, labelInterests3, inputInterests4, labelInterests4, inputInterests5, labelInterests5, inputInterests6, labelInterests6, inputInterests7, labelInterests7, inputInterests8, labelInterests8, inputInterests9, labelInterests9, inputInterests10, labelInterests10, inputInterests11, labelInterests11, inputInterests12, labelInterests12);

  // eslint-disable-next-line max-len
  formInterests.append(buttonCity, buttonCountry, lineInterests, container, buttonInterests);

  // eslint-disable-next-line max-len
  sectionInterests.append(logoInterests, textInterests1, textInterests2, formInterests, footerInterests);
  return sectionInterests;
}

export default interests;
