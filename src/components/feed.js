/* eslint-disable no-unused-vars */
// file intersts finished
function feed(navigateTo) {
  const sectionFeed = document.createElement('section');
  // Header//
  const headerFeed = document.createElement('header');
  const logoFeed = document.createElement('img');
  const lineFeed = document.createElement('hr');
  // Posts
  const containerPost = document.createElement('div');
  const formFeed = document.createElement('form');
  const labelTitleP = document.createElement('label');
  const inputTitleP = document.createElement('input');
  const labelCourseInfo = document.createElement('label');
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

  headerFeed.classList.add('headerFeed');
  logoFeed.classList.add('logoFeed');
  lineFeed.classList.add('lineFeed');
  // Posts
  containerPost.classList.add('containerPost');
  formFeed.classList.add('formFeed');
  labelTitleP.classList.add('labelTitleP');
  inputTitleP.classList.add('inputTitleP');
  labelCourseInfo.classList.add('labelCourseInfo');
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
  inputTitleP.placeholder = ' What is the title of your course?';
  textCourseInfo.placeholder = ' Describe your course...';
  btnPublish.textContent = 'Post';
  labelTitleP.textContent = 'Title';
  labelCourseInfo.textContent = 'Description';

  labelTitleP.setAttribute('id', 'labelTitleP');
  labelTitleP.setAttribute('for', 'labelTitleP');
  labelCourseInfo.setAttribute('id', 'labelCourseInfo');
  labelCourseInfo.setAttribute('for', 'labelCourseInfo');

  inputTitleP.setAttribute('type', 'text');
  btnPublish.setAttribute('type', 'submit');
  inputTitleP.setAttribute('name', 'inputTitleP');
  textCourseInfo.setAttribute('name', 'textCourseInfo');

  headerFeed.append(logoFeed);

  containerPost.append(formFeed);
  formFeed.append(labelTitleP, inputTitleP, labelCourseInfo, textCourseInfo, btnPublish);

  footerFeed.append(navFeed);
  navFeed.append(homeFeed, searchFeed, circleFeed, postFeed, chatFeed, profileFeed);

  // eslint-disable-next-line max-len
  sectionFeed.append(headerFeed, lineFeed, containerPost, containerFriends, footerFeed);
  return sectionFeed;
}

export default feed;
