// file error.js
function error() {
  const titleError = document.createElement('h2');
  titleError.classList.add('titleError');
  titleError.textContent = 'Error 404 page no found, please go home';
  return titleError;
}

export default error;
