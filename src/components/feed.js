/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// file intersts finished
let contador = 0;

// function incrementarContador() {
// contador++;
// likeCounter.textContent = contador;
// }

function feed(navigateTo) {
  const sectionFeed = document.createElement('section');
  // Header//
  const headerFeed = document.createElement('header');
  const logoFeed = document.createElement('img');
  const lineFeed = document.createElement('hr');
  // Posts
  const containerPost = document.createElement('div');
  const likeFeed = document.createElement('input');
  const likeCounter = document.createElement('span');
  const formFeed = document.createElement('form');
  const pictureDiv = document.createElement('div');
  const profilePic = document.createElement('img');
  const inputTitleP = document.createElement('input');
  const textCourseInfo = document.createElement('textarea');
  const btnPublish = document.createElement('button');
  // Friends
  const containerFriends = document.createElement('div');
  // Footer//
  const footerFeed = document.createElement('footer');
  const navFeed = document.createElement('navFeed');
  const homeFeed = document.createElement('img');
  const searchFeed = document.createElement('img');
  const circleFeed = document.createElement('div');
  const postFeed = document.createElement('img');
  const chatFeed = document.createElement('img');
  const profileFeed = document.createElement('img');

  // Header
  headerFeed.classList.add('headerFeed');
  logoFeed.classList.add('logoFeed');
  lineFeed.classList.add('lineFeed');
  // Posts
  containerPost.classList.add('containerPost');
  likeFeed.classList.add('likeFeed');
  likeCounter.classList.add('likeCounter');
  formFeed.classList.add('formFeed');
  pictureDiv.classList.add('pictureDiv');
  profilePic.classList.add('profilePic');
  inputTitleP.classList.add('inputTitleP');
  textCourseInfo.classList.add('textCourseInfo');
  btnPublish.classList.add('btnPublish');
  // Friends
  containerFriends.classList.add('containerFriends');
  footerFeed.classList.add('footerFeed');
  navFeed.classList.add('navFeed');
  homeFeed.classList.add('homeFeed');
  searchFeed.classList.add('searchFeed');
  circleFeed.classList.add('circleFeed');
  postFeed.classList.add('postFeed');
  chatFeed.classList.add('chatFeed');
  profileFeed.classList.add('profileFeed');

  logoFeed.src = '../components/images/cadenas-learnlink.png';
  homeFeed.src = '../components/images/hogar.png';
  searchFeed.src = '../components/images/buscar.png';
  postFeed.src = '../components/images/mas.png';
  chatFeed.src = '../components/images/mensajero.png';
  profileFeed.src = '../components/images/perfil.png';
  profilePic.src = '../components/images/profile-pic.png';
  likeFeed.src = '../components/images/corazon.png';
  likeCounter.textContent = '0';
  inputTitleP.placeholder = ' What is the title of your course?';
  textCourseInfo.placeholder = ' Describe your course...';
  btnPublish.textContent = 'Post';

  likeFeed.setAttribute('type', 'image');
  likeFeed.setAttribute('id', 'likeFeed');
  likeFeed.setAttribute('for', 'likeFeed');
  likeCounter.setAttribute('id', 'likeCounter');
  likeCounter.setAttribute('for', 'likeCounter');
  profilePic.setAttribute('id', 'profilePic');
  profilePic.setAttribute('name', 'profilePic');
  btnPublish.setAttribute('id', 'btnPublish');
  btnPublish.setAttribute('for', 'btnPublish');

  inputTitleP.setAttribute('type', 'text');
  btnPublish.setAttribute('type', 'submit');
  inputTitleP.setAttribute('name', 'inputTitleP');
  textCourseInfo.setAttribute('name', 'textCourseInfo');

  likeFeed.addEventListener('click', (event) => {
    event.preventDefault();
    function incrementarContador() {
      contador++;
      likeCounter.textContent = contador;
    }
    function decrementarContador() {
      contador--;
      likeCounter.textContent = contador;
    }
    // Cambiar la imagen
    if (likeFeed.src.endsWith('corazon.png')) {
      likeFeed.src = '../components/images/corazon2.png';
      incrementarContador();
    } else {
      likeFeed.src = '../components/images/corazon.png';
      decrementarContador();
    }
  });

  headerFeed.append(logoFeed);

  containerPost.append(formFeed);
  pictureDiv.append(profilePic);
  formFeed.append(pictureDiv, inputTitleP, textCourseInfo, btnPublish, likeFeed, likeCounter);

  footerFeed.append(navFeed);
  navFeed.append(homeFeed, searchFeed, circleFeed, postFeed, chatFeed, profileFeed);

  // eslint-disable-next-line max-len
  sectionFeed.append(headerFeed, lineFeed, containerPost, containerFriends, footerFeed);

  return sectionFeed;
}

export default feed;
