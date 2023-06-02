/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable radix */
/* eslint-disable max-len */
import { getAllPosts, updatePostLikes } from '../lib/firebase';

async function feed(navigateTo) {
  const user = JSON.parse(localStorage.getItem('user'));
  const sectionFeed = document.createElement('section');

  function generateHeader() {
    const header = document.createElement('header');
    header.classList.add('headerFeed');
    const logoFeed = document.createElement('img');
    logoFeed.classList.add('logoFeed');
    logoFeed.src = '../components/images/cadenas-learnlink.png';
    header.appendChild(logoFeed);
    return header;
  }

  async function createUserPosts(user) {
    const userPosts = await getAllPosts(user.uid);
    let postsContainer = '';
    if (userPosts !== undefined) {
      userPosts.forEach((post, index) => {
        postsContainer += `
        <div class="card">
          <div class="container-creator">
            <img src="${post.authorPhotoUrl}" />
          </div>
          <div class="card-post">
            <h1>${post.title}</h1>
            <p>${post.description}</p>
          </div>
          <div class="container-heart">
            <h3 id="likes-number-${post.id}">${post.likes}</h3>
            <img id="like-img-${post.id}" data='{"user":"${user.uid}","post":"${post.id}"}' class="like-img" src="../components/images/corazon2.png" />
          </div>
        </div>
        `;
      });
    } else {
      postsContainer = 'No hay posts que visualizar';
    }
    return postsContainer;
  }

  function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footerFeed');
    const navFeed = document.createElement('navfeed');
    navFeed.classList.add('navFeed');
    const homeFeed = document.createElement('img');
    homeFeed.classList.add('homeFeed');
    homeFeed.src = '../components/images/hogar.png';
    const searchFeed = document.createElement('img');
    searchFeed.classList.add('searchFeed');
    searchFeed.src = '../components/images/buscar.png';
    const circleFeed = document.createElement('div');
    circleFeed.classList.add('circleFeed');
    const postFeed = document.createElement('img');
    postFeed.classList.add('postFeed');
    postFeed.src = '../components/images/mas.png';
    const chatFeed = document.createElement('img');
    chatFeed.classList.add('chatFeed');
    chatFeed.src = '../components/images/mensajero.png';
    const profileFeed = document.createElement('img');
    profileFeed.classList.add('profileFeed');
    profileFeed.src = '../components/images/perfil.png';
    navFeed.appendChild(homeFeed);
    navFeed.appendChild(searchFeed);
    navFeed.appendChild(circleFeed);
    navFeed.appendChild(postFeed);
    navFeed.appendChild(chatFeed);
    navFeed.appendChild(profileFeed);
    footer.appendChild(navFeed);
    return footer;
  }

  async function applySendingLikesOption(sectionFeed) {
    const likeBtns = sectionFeed.querySelectorAll('.like-img');
    likeBtns.forEach((heart) => {
      heart.addEventListener('click', async () => {
        const likeData = JSON.parse(heart.getAttribute('data'));
        const likesContainer = sectionFeed.querySelector(`#likes-number-${likeData.post}`);
        const likesNumer = parseInt(likesContainer.textContent) + 1;
        await updatePostLikes(likeData.post, likesNumer);
        likesContainer.textContent = likesNumer;
      });
    });
  }

  const feedSection = `
    ${generateHeader().outerHTML}
    <div class= "lineFeed"><hr class="lineFeedHr">
    </div>
    <div class="containerPosts">
    ${await createUserPosts(user)}
    </div>
    ${createFooter().outerHTML}
  `;
  sectionFeed.innerHTML = feedSection;
  applySendingLikesOption(sectionFeed);

  return sectionFeed;
}

export default feed;
