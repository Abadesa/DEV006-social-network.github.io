import { getAllPosts, updatePostLikes } from '../lib/firebase';

let contador = 0;

async function feed(navigateTo) {
  const user = JSON.parse(localStorage.getItem("user"));
  const sectionFeed = document.createElement('section');
  const feedSection = `
    ${ generateHeader() }
    <hr class="lineFeed">
    <div class="containerPosts">
    ${await createUserPosts(user)}
    </div>
    ${ createFooter() }
  `;
  sectionFeed.innerHTML = feedSection;
  applySendingLikesOption(sectionFeed);
  
  return sectionFeed;
}

function generateHeader(){
  const headerContainer = `
    <header class="headerFeed">
      <img class="logoFeed" src="../components/images/cadenas-learnlink.png">
    </header>
  `;
  return headerContainer;
}

async function createUserPosts(user) {
  const userPosts = await getAllPosts(user.uid);
  let postsContainer = "";
  if(userPosts !== undefined){
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
    postsContainer = "No hay posts que visualizar";
  }
  return postsContainer;
}

function applySendingLikesOption(sectionFeed){
  const likeBtns = sectionFeed.querySelectorAll('.like-img');
  likeBtns.forEach((heart) => {
    heart.addEventListener("click", () => {
      const likeData = JSON.parse(heart.getAttribute("data"));
      const likesContainer = sectionFeed.querySelector(`#likes-number-${likeData.post}`);
      const likesNumer = parseInt(likesContainer.textContent)+1;
      updatePostLikes(likeData.post, likesNumer);
      likesContainer.textContent = likesNumer;
    });
  });
}

function createFooter() {
  const footerContainer = `
    <footer class="footerFeed">
      <navfeed class="navFeed">
        <img class="homeFeed" src="../components/images/hogar.png">
        <img class="searchFeed" src="../components/images/buscar.png">
        <div class="circleFeed"></div>
        <img class="postFeed" src="../components/images/mas.png">
        <img class="chatFeed" src="../components/images/mensajero.png">
        <img class="profileFeed" src="../components/images/perfil.png">
      </navfeed>
    </footer>
  `;
  return footerContainer;
}
export default feed;