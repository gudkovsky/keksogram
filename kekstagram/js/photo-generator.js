const randomPictureTemplate = document.querySelector('#picture')
      .content
      .querySelector('.picture');

const picturesContainer = document.querySelector('.pictures')


{/* <template id="picture">
<a href="#" class="picture">
<img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
<p class="picture__info">
  <span class="picture__comments"></span>
  <span class="picture__likes"></span>
</p>
</a>
</template> */}

// for (let i = 0; i <= 5; i++) {
//   picturesContainer.appendChild(randomPicture)
// }

import { createPhotos } from "./utilities.js";

export const randomGeneratedPhotos = createPhotos();

randomGeneratedPhotos.forEach((photo) => {
  const randomPicture = randomPictureTemplate.cloneNode(true);

  const randomPhotoImg = randomPicture.querySelector('.picture__img')
  const randomPhotoCommentsCount = randomPicture.querySelector('.picture__comments')
  const randomPhotoLikesCount = randomPicture.querySelector('.picture__likes')

  randomPhotoImg.src = photo.url;
  randomPhotoCommentsCount.textContent = photo.commentsNumber;
  randomPhotoLikesCount.textContent = photo.likes;

  randomPhotoImg.alt = photo.description

  picturesContainer.appendChild(randomPicture)
});

