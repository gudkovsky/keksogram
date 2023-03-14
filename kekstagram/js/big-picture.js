const bigPictureContainer = document.querySelector('.big-picture')
const bigPictureImage = bigPictureContainer.querySelector('.big-picture__img img')
const previewPictures = document.querySelectorAll('.picture')
const bigPictureCloseButton = bigPictureContainer.querySelector('.big-picture__cancel')
const bigPictureDescription = bigPictureContainer.querySelector('.social__caption')
const bigPictureLikesCount = bigPictureContainer.querySelector('.likes-count')
const bigPictureCommentsCount = bigPictureContainer.querySelector('.social__comment-count') // отображено
const bigPictureCommentsTotal = bigPictureContainer.querySelector('.comments-count') // всего комментов

import { randomGeneratedPhotos } from "./photo-generator.js"

previewPictures.forEach((e, i) => {
  e.addEventListener('click', () => {
    bigPictureContainer.classList.remove('hidden')
    document.body.classList.add('modal-open')

    const clickedPicture = e.querySelector('.picture__img')
    bigPictureImage.src = clickedPicture.src;
    bigPictureDescription.textContent = clickedPicture.alt;
    bigPictureLikesCount.textContent = randomGeneratedPhotos[i].likes;

    bigPictureCommentsCount.innerHTML = `${randomGeneratedPhotos[i].commentsNumber} из <span class="comments-count">${randomGeneratedPhotos[i].commentsNumber}</span> комментариев`;

    // console.log(i)
    // console.log(randomGeneratedPhotos[i].comments)

  })

})

// e queryselector picture_img



// close button

bigPictureCloseButton.addEventListener('click', () => {
  bigPictureContainer.classList.add('hidden')
  document.body.classList.remove('modal-open')
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    bigPictureContainer.classList.add('hidden')
    document.body.classList.remove('modal-open')
  }
})
