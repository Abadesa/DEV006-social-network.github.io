import { addPostForUser, updatePost } from '../lib/firebase';

function post(navigateTo) {
  const user = JSON.parse(localStorage.getItem('user'));
  const updateData = JSON.parse(localStorage.getItem('upd-post'));

  if(updateData || updateData!== undefined){
    localStorage.removeItem("upd-post");
  }
  const sectionPost = document.createElement('section');

  async function applyHomeFunction(sectionFeed) {
    const postBtn = sectionFeed.querySelector('.homeFeed');
    postBtn.addEventListener('click', async (event) => {
      event.preventDefault();
      navigateTo('/feed');
    });  
  }

  const postHtml = `
  <div class="container">
    <div class="success-box hidden" id="success-box">El post se agregó satisfactoriamente</div>
    <div class="post-form">
      <img class="user-image" src="${user.photoURL || './components/images/perfil.png'}" alt="User Image">
      <input type="text" class="post-title" placeholder="Título del post" value="${updateData !== null ? updateData.title : ''}">
      <textarea class="post-description" placeholder="Descripción del post">${updateData !== null ? updateData.description : ''}</textarea>
      <button class="publish-button">Publicar</button>
    </div>
  </div>
  ${createFooter().outerHTML}
  `;

  sectionPost.innerHTML = postHtml;
  applyPostAction(sectionPost, user, updateData);
  applyHomeFunction(sectionPost);
  
  return sectionPost;
}

async function applyPostAction(sectionPost, user, updateData) {
  const postBtn = sectionPost.querySelector('.publish-button');
  postBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const titleInput = sectionPost.querySelector('.post-title');
    const description = sectionPost.querySelector('.post-description');
    if(updateData===null){
      addPostForUser({
        title: titleInput.value,
        description: description.value,
        likes: [],
        authorPhotoUrl: user.photoURL || './components/images/perfil.png',
        createdBy: user.uid,
        createdAt: new Date()
      });
    } else {
      updatePost(updateData, {
        title: titleInput.value,
        description: description.value
      });
    }
    titleInput.value = "";
    description.value = "";
    sectionPost.querySelector("#success-box").classList.toggle("hidden");
    setTimeout(function() {
      sectionPost.querySelector("#success-box").classList.toggle("hidden");
    }, 2000);

  });
  
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

export default post;