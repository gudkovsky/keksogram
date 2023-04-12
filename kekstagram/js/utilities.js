
import { image_array, descriptionArray, commentMessage, commentNames, commentSurnames, indexArray} from "./basic-data.js";

// random integer old version

function getRandomInt(min, max = 1) {
  min = Math.floor(min);
  max = Math.round(max);

  if (min >= max || max <= 0) {
    return  'Значения введены некорректно'

  }
    return Math.floor(Math.random() * (max + 1 - min)) + min;

}

// string lenght checker

function checkStringLength (string, length) {
  return string.length <= length;
}

// random integer new version

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// random array element based on array lenght

const getRandomArrayElement = (array) => {
  return array[getRandomPositiveInteger(0, array.length - 1)]
}

// comment ID and avatar old version

let commentId = getRandomPositiveInteger(1, 1000);
// let commentAvatar = `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`

// create array of photos when cycle lengh = number of elements in the future array

const photoIndexArray = []

const createPhotoArray = () => {
for (let i = 1; i <= 25; i++) {
let result = 0 + i
photoIndexArray.push(result)
  }
}
createPhotoArray()

// random background image generator

function getRandomImage() {

  let randomIndex = Math.floor(Math.random() * image_array.length)
  let selectedImage = image_array[randomIndex]

  document.getElementById('upload-select-image').style.cssText= `
  background-image: url('./img/index-bg/${selectedImage}');
  background-size: cover;
  `
}

getRandomImage()


let getId = function() {
  let getIndex = getRandomArrayElement(indexArray);

  let deleteIndex = indexArray.indexOf(getIndex)

  indexArray.splice(deleteIndex, 1);
  // console.log(getIndex)

  // console.log(deleteIndex)
  return(getIndex)
}

let getPhotoId = function() {
  let getIndex2 = getRandomArrayElement(photoIndexArray);
  let deleteIndex = photoIndexArray.indexOf(getIndex2)

  photoIndexArray.splice(deleteIndex, 1);
  return(getIndex2)
}

// comment generator

const createComment = () => {
  return {
    id: '' + commentId,
    avatar: '' +  `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: '' + getRandomArrayElement(commentMessage),
    name: getRandomArrayElement(commentNames) + '' + getRandomArrayElement(commentSurnames),
  }
}
const getComments = () => Array.from({length: getRandomPositiveInteger(2, 9)}, createComment);

// create photo upload emulator

const createPhoto = () => {
  let getCommentsFunctionResult = getComments()
  return {
    id: '' + getId(),
    url: '' + `photos/${getPhotoId()}.jpg`,
    description: '' + getRandomArrayElement(descriptionArray),
    likes: '' + getRandomPositiveInteger(15, 200),
    comments: getCommentsFunctionResult,
    commentsNumber: getCommentsFunctionResult.length,
  }
  }

  // create array of X photos in profile

  const NUMBER_OF_PHOTOS = 12;

  export const createPhotos = () => Array.from({length: NUMBER_OF_PHOTOS}, createPhoto);

  // ARCHIVE

// const createPhotos = () => {
//   for (let i = 1; i <= 25; i++) {
//     getId();
// console.log(indexArray)
// console.log(i)
//     }
//   }



// console.log(createPhotos)

// console.log(indexArray)

// console.log(photoIndexArray)
