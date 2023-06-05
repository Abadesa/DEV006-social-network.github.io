import { addPostForUser, updatePost } from '../lib/firebase';

function post(navigateTo) {
  const user = JSON.parse(localStorage.getItem('user'));
  const updateData = JSON.parse(localStorage.getItem('upd-post'));

  if(updateData || updateData!== undefined){
    localStorage.removeItem("upd-post");
  }
  const sectionPost = document.createElement('section');

  const postHtml = `
  <div class="container">
    <div class="post-form">
      <img class="user-image" src="${user.photoURL}" alt="User Image">
      <input type="text" class="post-title" placeholder="Título del post" value="${updateData !== null ? updateData.title : ''}">
      <textarea class="post-description" placeholder="Descripción del post">${updateData !== null ? updateData.description : ''}</textarea>
      <button class="publish-button">Publicar</button>
    </div>
  </div>
  `;

  sectionPost.innerHTML = postHtml;
  applyPostAction(sectionPost, user, updateData);
  
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
        likes: 0,
        authorPhotoUrl: user.photoURL,
        createdBy: user.uid,
        createdAt: new Date()
      });
    } else {
      updatePost(updateData, {
        title: titleInput.value,
        description: description.value
      });
    }
  });
  
}

export default post;