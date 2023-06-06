/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable radix */
/* eslint-disable max-len */
import { getAllPosts, updatePostLikes, deletePost } from '../lib/firebase';

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
        console.log(post.likes);
        const likesNumber = post.likes.length;
        const isLikedByUser = post.likes.some(like => like.user === user.uid);
        postsContainer += `
        <div class="card" id="card-${post.id}">
          <div class="container-creator">
            <img src="${post.authorPhotoUrl}" />
          </div>
          <div class="card-post">
            <h1 id="title-${post.id}">${post.title}</h1>
            <p id="description-${post.id}">${post.description}</p>
          </div>
          <div class="container-heart">
            <h3 id="likes-number-${post.id}" class="${(isLikedByUser) ? '' : 'noLiked'}">${likesNumber}</h3>
            <img id="like-img-${post.id}" data='{"user":"${user.uid}","post":"${post.id}", "isLikedByUser": "${isLikedByUser}"}' class="like-img" src="${(isLikedByUser) ? '../components/images/corazon2.png' : '../components/images/corazon.png'}" />
          </div>
          ${user.uid === post.createdBy ?
            `<div class="container-admin-btns">
               <img id="upd-img-${post.id}" data='{"user":"${user.uid}","post":"${post.id}"}' class="upd-img" src="../components/images/editar.png" />
               <img id="del-img-${post.id}" data='{"user":"${user.uid}","post":"${post.id}"}' class="del-img" src="../components/images/cancelar.png" />
             </div>` : ''
          }
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

  async function applySendingLikesOption(sectionFeed, user) {
    const likeBtns = sectionFeed.querySelectorAll('.like-img');
    likeBtns.forEach((heart) => {
      heart.addEventListener('click', async () => {
        const likeData = JSON.parse(heart.getAttribute('data'));
        console.log(likeData);
        console.log(JSON.parse(likeData.isLikedByUser));
        if(!JSON.parse(likeData.isLikedByUser)){
          const likesContainer = sectionFeed.querySelector(`#likes-number-${likeData.post}`);
          const likesNumer = parseInt(likesContainer.textContent) + 1;
          await updatePostLikes(likeData.post, {user: user.uid});
          likesContainer.textContent = likesNumer;
          heart.setAttribute('data',JSON.stringify({...likeData, "isLikedByUser": "true"}));
          heart.setAttribute("src", "../components/images/corazon2.png");
          likesContainer.classList.remove("noLiked");
        } else {
          console.log("El usuario ya le habia dado like antes");
        }
      });
    });
  }

  async function applyDeletePostOption(sectionFeed) {
    const delBtns = sectionFeed.querySelectorAll('.del-img');
    delBtns.forEach((post) => {
      post.addEventListener('click', async () => {
        if(confirm("Estas seguro que desea eliminar el post")){
          const likeData = JSON.parse(post.getAttribute('data'));
          await deletePost(likeData.post);
          const card = sectionFeed.querySelector(`#card-${likeData.post}`);
          card.remove();
        }
      });
    });
  }

  async function applyCreatePostFunction(sectionFeed) {
    const postBtn = sectionFeed.querySelector('.postFeed');
    postBtn.addEventListener('click', async (event) => {
      event.preventDefault();
      navigateTo('/post');
    });
    
  }

  async function applyUpdatePostOption(sectionFeed) {
    const updBtn = sectionFeed.querySelectorAll('.upd-img');
    console.log(updBtn);
    updBtn.forEach((post) => {
      post.addEventListener('click', async (event) => {
        event.preventDefault();
        const updateData = JSON.parse(post.getAttribute('data'));
        const title = sectionFeed.querySelector(`#title-${updateData.post}`).textContent;
        const description = sectionFeed.querySelector(`#description-${updateData.post}`).textContent;
        localStorage.setItem ("upd-post", JSON.stringify({
          title: title,
          description: description,
          ...updateData
        }));
        navigateTo('/post');
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
  applySendingLikesOption(sectionFeed, user);
  applyDeletePostOption(sectionFeed);
  applyUpdatePostOption(sectionFeed);
  applyCreatePostFunction(sectionFeed);

  return sectionFeed;
}

export default feed;