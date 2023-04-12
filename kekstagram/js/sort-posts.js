// const comparePosts = (PostA, PostB) => {
//   const rankA = getPostRank(PostA);
//   const rankB = getPostRank(PostB);

//   return rankB - rankA;
// }

import { randomGeneratedPhotos } from "./photo-generator.js"


const picturesContainer = document.querySelector('.pictures')
const popularButton = document.querySelector('#filter-popular')
const discussedButton = document.querySelector('#filter-discussed')
const defaultButton = document.querySelector('#filter-default')

const renderStuff = function () {
  function compare (a, b) {
    return a - b
  };

  // picturesContainer.innerHTML = ''

  const likedArray = randomGeneratedPhotos.slice();

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

const renderDiscussedStuff = function () {
  function compare (a, b) {
    return a - b
  };

  // picturesContainer.innerHTML = ''

  const discussedArray = randomGeneratedPhotos.slice();

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

const renderDefaultStuff = function () {

  const defaultArray = randomGeneratedPhotos.slice();


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
}
)
// const commentedArray = randomGeneratedPhotos.slice();

// commentedArray.sort((a,b) => b.comments.length - a.comments.length); // b - a for reverse sort

// console.log(commentedArray)
