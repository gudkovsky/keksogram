import { closeUploadForm } from "./upload-image.js";

const imageUploadForm = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitButton.setAttribute('disabled', '');
}
const unblockSubmitButton = () => {
  submitButton.removeAttribute('disabled');
}

const alertTimeMs = 4000

const buildAlertMessage = (message) => {
  const alertDiv = document.createElement('div');
  alertDiv.style.cssText = `
  position: absolute;
  z-index: 99;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255,255,255,0.5);
  color: black;
  font-size: 30px;
  padding: 20px 25px;
  `;
  alertDiv.textContent = message;
  document.body.append(alertDiv)

  setTimeout(() => {
    alertDiv.remove()
  }, alertTimeMs)
}

imageUploadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  blockSubmitButton();
  const formData = new FormData(event.target);

  fetch('https://25.javascript.pages.academy/kekstagram', {
  method: 'POST',
  body: formData,

  })
  .then((response) => {
    if (response.ok) {
      unblockSubmitButton();
      buildAlertMessage('Ваше изображение успешно загружено!');
      closeUploadForm();
    } else {
      buildAlertMessage('Не удалось отправить форму. Попробуйте ещё раз');
      unblockSubmitButton();
    }
  })
})
