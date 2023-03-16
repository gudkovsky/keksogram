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

if (imageScaleNumber === 1) {
  zoomInButton.setAttribute('disabled', '')
}


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
    if (imageScaleNumber === 1) {
      zoomInButton.setAttribute('disabled', '')
    }
})
