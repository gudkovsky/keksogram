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

const effectLevelField = document.querySelector('.img-upload__effect-level')
const effectsList = document.querySelector('.effects__list')

effectLevelField.style.cssText = `opacity: 0`

effectsList.addEventListener('click', (e) => {
  const effectType = e.target.value

  uploadedImage.classList = `${'effects__preview--' + effectType}`

  if (uploadedImage.classList.contains('effects__preview--none')) {
    uploadedImage.style.cssText = `filter: none;`

    effectLevelField.style.cssText = `opacity: 0`
  }
  if (uploadedImage.classList.contains('effects__preview--chrome')) {
    uploadedImage.style.cssText = `filter: grayscale(1)`
    effectLevelField.style.cssText = `opacity: 1`
  }
  if (uploadedImage.classList.contains('effects__preview--sepia')) {
    uploadedImage.style.cssText = `filter: sepia(1)`
    effectLevelField.style.cssText = `opacity: 1`
  }
  if (uploadedImage.classList.contains('effects__preview--marvin')) {
    uploadedImage.style.cssText = `filter: invert(40%)`
    effectLevelField.style.cssText = `opacity: 1`
  }
  if (uploadedImage.classList.contains('effects__preview--phobos')) {
    uploadedImage.style.cssText = `filter: blur(2px)`
    effectLevelField.style.cssText = `opacity: 1`
  }
  if (uploadedImage.classList.contains('effects__preview--heat')) {
    uploadedImage.style.cssText = `filter: brightness(1.5)`
    effectLevelField.style.cssText = `opacity: 1`
  }

})

// slider
const slider = document.querySelector('.slider')

slider.onmouseup = (e) => {
  let sliderValue = e.target.value
  if (uploadedImage.classList.contains('effects__preview--chrome')) {

    let  filterValue = `${'0.'+ sliderValue.padStart(2, "0")}`
    if (sliderValue == 100) {
      filterValue = 1
    }
    uploadedImage.style.cssText = `filter: grayscale(${filterValue})`
  }

  if (uploadedImage.classList.contains('effects__preview--sepia')) {

    let filterValue = `${'0.'+ sliderValue.padStart(2, "0")}`
    if (sliderValue == 100) {
      filterValue = 1
    }
    uploadedImage.style.cssText = `filter: sepia(${filterValue})`
  }

  if (uploadedImage.classList.contains('effects__preview--marvin')) {
    let filterValue = `${'0.'+ sliderValue.padStart(2, "0")}`
    if (sliderValue == 100) {
      filterValue = 1
    }
    let filterValueTotal = (40 * filterValue) + '%'


    uploadedImage.style.cssText = `filter: invert(${filterValueTotal})`

  }
  if (uploadedImage.classList.contains('effects__preview--phobos')) {

    let filterValue = `${'0.'+ sliderValue.padStart(2, "0")}`
    if (sliderValue == 100) {
      filterValue = 1
    }
    let filterValueTotal = (2 * filterValue) + 'px'

    uploadedImage.style.cssText = `filter: blur(${filterValueTotal})`

    console.log(filterValueTotal)
  }
  if (uploadedImage.classList.contains('effects__preview--heat')) {
    let filterValue = `${'0.'+ sliderValue.padStart(2, "0")}`
    if (sliderValue == 100) {
      filterValue = 1
    }
    let filterValueTotal = (1.5 * filterValue)

    uploadedImage.style.cssText = `filter: brightness(${filterValueTotal})`
  }

}

// close upload modal
const uploadPictureCloseButton = document.querySelector('.img-upload__cancel')
const uploadOverlay = document.querySelector('.img-upload__overlay')
const fileUploadInput = document.querySelector('.img-upload__input')
const hashtagsInput = document.querySelector('.text__hashtags')

// const handleFocus = function (e) {

//   if (e.target == hashtagsInput) {
//     hashtagsInput.stopPropagation()
//     console.log(e.target)
//   }
// }


export const closeUploadForm = function () {
  if (hashtagsInput == document.activeElement) {
   return
  }

  uploadOverlay.classList.add('hidden')
  document.body.classList.remove('modal-open')
  imageUploadForm.classList.add('img-upload--mask')
  imageUploadForm.reset()
}

uploadPictureCloseButton.addEventListener('click', () => {
  closeUploadForm()
})

document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') {
    closeUploadForm()
  }
})

document.addEventListener('click', (e) => {
  if (e.target == uploadOverlay && hashtagsInput != document.activeElement) {
    closeUploadForm()
  }
})


