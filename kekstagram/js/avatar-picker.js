const fileInput = document.querySelector('.img-upload__input')
const previewPicture = document.querySelector('.img-upload__preview img')// img src
const previewEffects = document.querySelectorAll('.effects__preview') // заменить background-image: url:

const FILE_ALLOWED = ['jpg', 'png', 'jpeg']

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0]
    const fileName = file.name.toLowerCase();
    const MAX_SIZE = 99999999999;

    const matchType = FILE_ALLOWED.some((type) => {
    return fileName.endsWith(type)
    })

    // const matchSize = () => {
    //   let result;
    //    if (file.size <= MAX_SIZE) {
    //     result = false;
    //     console.log(result)
    //    } else {
    //     result = true;
    //     console.log(result)
    //    }

    //   return result
    // }
    const matchSize = () => {
      let result;
       result = file.size <= MAX_SIZE
      return result
    }


    if (matchSize() && matchType) {
      const fileUrl = URL.createObjectURL(file)
      previewPicture.src = fileUrl
      console.log('success')
      previewEffects.forEach((el) => {
        console.log(fileUrl)
        el.style.backgroundImage =  `url(${fileUrl})`;
      }
      )
    }


    console.log(file)
});
