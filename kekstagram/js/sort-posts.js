// const comparePosts = (PostA, PostB) => {
//   const rankA = getPostRank(PostA);
//   const rankB = getPostRank(PostB);

//   return rankB - rankA;
// }

import { randomGeneratedPhotos } from "./photo-generator.js"
import './big-picture.js'


const picturesContainer = document.querySelector('.pictures')
const popularButton = document.querySelector('#filter-popular')
const discussedButton = document.querySelector('#filter-discussed')
const defaultButton = document.querySelector('#filter-default')

const bigPictureContainer = document.querySelector('.big-picture')
const bigPictureImage = bigPictureContainer.querySelector('.big-picture__img img')
const previewPictures = document.querySelectorAll('.picture')
const bigPictureCloseButton = bigPictureContainer.querySelector('.big-picture__cancel')
const bigPictureDescription = bigPictureContainer.querySelector('.social__caption')
const bigPictureLikesCount = bigPictureContainer.querySelector('.likes-count')
const bigPictureCommentsCount = bigPictureContainer.querySelector('.social__comment-count')
const commentsList = document.querySelector('.social__comments')

let likedArray;
const renderStuff = function () {
  function compare (a, b) {
    return a - b
  };

  // picturesContainer.innerHTML = ''

 likedArray = randomGeneratedPhotos.slice();

  likedArray.sort((a,b) => b.likes - a.likes); // b - a for reverse sort



  const randomPictureTemplate = document.querySelector('#picture')
        .content
        .querySelector('.picture');
  // Взять существующий массив. Отсортировать его по убыванию. Заменить содержимое страницы


  likedArray.forEach((photo) => {
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
}

export let discussedArray;
const renderDiscussedStuff = function () {
  function compare (a, b) {
    return a - b
  };

  // picturesContainer.innerHTML = ''

  discussedArray = randomGeneratedPhotos.slice();

  discussedArray.sort((a,b) => b.comments.length - a.comments.length); // b - a for reverse sort



  const randomPictureTemplate = document.querySelector('#picture')
        .content
        .querySelector('.picture');
  // Взять существующий массив. Отсортировать его по убыванию. Заменить содержимое страницы


  discussedArray.forEach((photo) => {
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
}

let defaultArray;
const renderDefaultStuff = function () {

defaultArray = randomGeneratedPhotos.slice();


  const randomPictureTemplate = document.querySelector('#picture')
        .content
        .querySelector('.picture');
  // Взять существующий массив. Отсортировать его по убыванию. Заменить содержимое страницы


  defaultArray.forEach((photo) => {
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
}

popularButton.addEventListener('click', () => {
  for (let i = 0; i < 12; i++) {
    picturesContainer.querySelector('a').remove()
  }
  renderStuff()
  popularButton.classList.add('img-filters__button--active')
  defaultButton.classList.remove('img-filters__button--active')
  discussedButton.classList.remove('img-filters__button--active')
  const sortedPicture = document.querySelectorAll('.picture')
  sortedPicture.forEach((e, i) => {
    e.addEventListener('click', (evt) => {
      // console.log('evt :' + evt,
      // 'e:'+ e,
      // 'i' + i)
      bigPictureContainer.classList.remove('hidden')
      document.body.classList.add('modal-open')

      const clickedPicture = e.querySelector('.picture__img')
      bigPictureImage.src = clickedPicture.src;
      bigPictureDescription.textContent = clickedPicture.alt;
      bigPictureLikesCount.textContent = likedArray[i].likes;

      bigPictureCommentsCount.innerHTML = `${likedArray[i].commentsNumber} из <span class="comments-count">${likedArray[i].commentsNumber}</span> комментариев`;

      commentsList.innerHTML = ''
      for (let x = 0; x < likedArray[i].commentsNumber; x++) {
        const commentText = likedArray[i].comments[`${x}`].message
        const commentName = likedArray[i].comments[`${x}`].name
        const commentUserpic = likedArray[i].comments[`${x}`].avatar

        const commentTemplate = `<li class="social__comment">
        <img class="social__picture" src="${commentUserpic}" alt="Аватар комментатора фотографии" width="35" height="35">
          <p class="social__name">${commentName}</p>
         <p class="social__text">${commentText}</p>
      </li>`
      commentsList.insertAdjacentHTML('beforeend', commentTemplate)
      }

    })
  })
}
)

discussedButton.addEventListener('click', () => {
  for (let i = 0; i < 12; i++) {
    picturesContainer.querySelector('a').remove()
  }
  renderDiscussedStuff()
  popularButton.classList.remove('img-filters__button--active')
  defaultButton.classList.remove('img-filters__button--active')
  discussedButton.classList.add('img-filters__button--active')
  const sortedPicture = document.querySelectorAll('.picture')
  sortedPicture.forEach((e, i) => {
    e.addEventListener('click', (evt) => {
      // console.log('evt :' + evt,
      // 'e:'+ e,
      // 'i' + i)
      bigPictureContainer.classList.remove('hidden')
      document.body.classList.add('modal-open')

      const clickedPicture = e.querySelector('.picture__img')
      bigPictureImage.src = clickedPicture.src;
      bigPictureDescription.textContent = clickedPicture.alt;
      bigPictureLikesCount.textContent = discussedArray[i].likes;

      bigPictureCommentsCount.innerHTML = `${discussedArray[i].commentsNumber} из <span class="comments-count">${discussedArray[i].commentsNumber}</span> комментариев`;

      commentsList.innerHTML = ''
      for (let x = 0; x < discussedArray[i].commentsNumber; x++) {
        const commentText = discussedArray[i].comments[`${x}`].message
        const commentName = discussedArray[i].comments[`${x}`].name
        const commentUserpic = discussedArray[i].comments[`${x}`].avatar

        const commentTemplate = `<li class="social__comment">
        <img class="social__picture" src="${commentUserpic}" alt="Аватар комментатора фотографии" width="35" height="35">
          <p class="social__name">${commentName}</p>
         <p class="social__text">${commentText}</p>
      </li>`
      commentsList.insertAdjacentHTML('beforeend', commentTemplate)
      }

    })
  })
}
)

defaultButton.addEventListener('click', () => {
  for (let i = 0; i < 12; i++) {
    picturesContainer.querySelector('a').remove()
  }
  renderDefaultStuff()
  defaultButton.classList.add('img-filters__button--active')
  popularButton.classList.remove('img-filters__button--active')
  discussedButton.classList.remove('img-filters__button--active')
  const sortedPicture = document.querySelectorAll('.picture')
  sortedPicture.forEach((e, i) => {
    e.addEventListener('click', (evt) => {
      // console.log('evt :' + evt,
      // 'e:'+ e,
      // 'i' + i)
      bigPictureContainer.classList.remove('hidden')
      document.body.classList.add('modal-open')

      const clickedPicture = e.querySelector('.picture__img')
      bigPictureImage.src = clickedPicture.src;
      bigPictureDescription.textContent = clickedPicture.alt;
      bigPictureLikesCount.textContent = defaultArray[i].likes;

      bigPictureCommentsCount.innerHTML = `${defaultArray[i].commentsNumber} из <span class="comments-count">${defaultArray[i].commentsNumber}</span> комментариев`;

      commentsList.innerHTML = ''
      for (let x = 0; x < defaultArray[i].commentsNumber; x++) {
        const commentText = defaultArray[i].comments[`${x}`].message
        const commentName = defaultArray[i].comments[`${x}`].name
        const commentUserpic = defaultArray[i].comments[`${x}`].avatar

        const commentTemplate = `<li class="social__comment">
        <img class="social__picture" src="${commentUserpic}" alt="Аватар комментатора фотографии" width="35" height="35">
          <p class="social__name">${commentName}</p>
         <p class="social__text">${commentText}</p>
      </li>`
      commentsList.insertAdjacentHTML('beforeend', commentTemplate)
      }

    })
  })
}
)
// const commentedArray = randomGeneratedPhotos.slice();

// commentedArray.sort((a,b) => b.comments.length - a.comments.length); // b - a for reverse sort

// console.log(commentedArray)

// document.querySelector('.pictures').addEventListener('click', (e) => {
//     console.log(e.target)})
