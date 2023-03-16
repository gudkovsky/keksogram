const imageUploadInput = document.querySelector('#upload-file')
const imageUploadForm = document.querySelector('.img-upload__form')
const uploadedImage = imageUploadForm.querySelector('.img-upload__preview img')

imageUploadInput.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open')

  imageUploadForm.classList.remove('img-upload--mask')

})


// ZOOM-zoom

const zoomOutButton = document.querySelector('.scale__control--smaller')
const zoomValue = document.querySelector('.scale__control--value')
const zoomInButton = document.querySelector('.scale__control--bigger')

let imageScaleNumber = 1;
let zoomPercentage = 100;

// if (imageScaleNumber === 1) {
//   zoomInButton.setAttribute('disabled', '')
// }


zoomOutButton.addEventListener('click', () => {
    imageScaleNumber = imageScaleNumber - 0.25;
    zoomPercentage -= 25;
    zoomValue.value = `${zoomPercentage}%`;
    uploadedImage.style.cssText = `transform: scale(${imageScaleNumber})`
    zoomInButton.removeAttribute('disabled')
    if (imageScaleNumber === 0.25) {
      zoomOutButton.setAttribute('disabled', '')
    }
})

zoomInButton.addEventListener('click', () => {
    imageScaleNumber = imageScaleNumber + 0.25;
    zoomPercentage += 25;
    zoomValue.value = `${zoomPercentage}%`;
    uploadedImage.style.cssText = `transform: scale(${imageScaleNumber})`
    zoomOutButton.removeAttribute('disabled')
    if (imageScaleNumber === 2) {
      zoomInButton.setAttribute('disabled', '')
    }
})

// Filters


const effectsList = document.querySelector('.effects__list')

effectsList.addEventListener('click', (e) => {
  const effectType = e.target.value

  uploadedImage.classList = `${'effects__preview--' + effectType}`

  if (uploadedImage.classList.contains('effects__preview--none')) {
    uploadedImage.style.cssText = `filter: none`
  }
  if (uploadedImage.classList.contains('effects__preview--chrome')) {
    uploadedImage.style.cssText = `filter: grayscale(1)`
  }
  if (uploadedImage.classList.contains('effects__preview--sepia')) {
    uploadedImage.style.cssText = `filter: sepia(1)`
  }
  if (uploadedImage.classList.contains('effects__preview--marvin')) {
    uploadedImage.style.cssText = `filter: invert(40%)`
  }
  if (uploadedImage.classList.contains('effects__preview--phobos')) {
    uploadedImage.style.cssText = `filter: blur(2px)`
  }
  if (uploadedImage.classList.contains('effects__preview--heat')) {
    uploadedImage.style.cssText = `filter: brightness(1.5)`
  }

})

// 1. В зависимости от фильтра применяется style: filter X

