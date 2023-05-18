// file intersts finished
function feed(navigateTo) {
  const sectionFeed = document.createElement('section');
  const headerFeed = document.createElement('header');
  const logoFeed = document.createElement('img');
  const lineFeed = document.createElement('hr');
  const containerPost = document.createElement('div');
  const containerFriends = document.createElement('div');
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
  containerPost.classList.add('containerPost');
  containerFriends.classList.add('containerFriends');
  footerFeed.classList.add('footerFeed');
  navFeed.classList.add('navFeed');
  homeFeed.classList.add('homeFeed');
  searchFeed.classList.add('searchFeed');
  circleFeed.classList.add('circleFeed');
  postFeed.classList.add('postFeed');
  chatFeed.classList.add('chatFeed');
  profileFeed.classList.add('profileFeed');

  logoFeed.src = './images/cadenas-learnlink.png';
  homeFeed.src = './images/hogar.png';
  searchFeed.src = './images/buscar.png';
  postFeed.src = './images/mas.png';
  chatFeed.src = './images/mensajero.png';
  profileFeed.src = './images/perfil.png';

  headerFeed.append(logoFeed);
  footerFeed.append(homeFeed, searchFeed, circleFeed, postFeed, chatFeed, profileFeed);

  // eslint-disable-next-line max-len
  sectionFeed.append(headerFeed, lineFeed, containerPost, containerFriends, footerFeed);
  return sectionFeed;
}

export default feed;
