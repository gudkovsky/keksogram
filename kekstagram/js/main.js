import './generators.js'
import './buttons.js'
import "./basic-data.js"



let image_array = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg',
  'img6.jpg',
  'img7.jpg',
  'img8.jpg',
  'img9.jpg',
  'img10.jpg',
  'img11.jpg',
  'img12.jpg',
  'img13.jpg',
  'img14.jpg',
  'img15.jpg'
]

function getRandomImage() {

  randomIndex = Math.floor(Math.random() * image_array.length)
  selectedImage = image_array[randomIndex]

  document.getElementById('upload-select-image').style.cssText= `
  background-image: url('./img/index-bg/${selectedImage}');
  background-size: cover;
  `
}

getRandomImage()

function getRandomInt(min, max = 1) {
  min = Math.floor(min);
  max = Math.round(max);

  if (min >= max || max <= 0) {
    return  'Значения введены некорректно'

  }
    return Math.floor(Math.random() * (max + 1 - min)) + min;

}



let toggleButton = document.getElementById('toggle-button');
let body = document.querySelector('body');

toggleButton.onclick = function() {
  body.classList.toggle('light-active');
}

function checkStringLength (string, length) {
  return string.length <= length;
}

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const getRandomArrayElement = (array) => {
  return array[getRandomPositiveInteger(0, array.length - 1)]
}



const indexArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
]


const descriptionArray = [
  'Где-то в горах краснодарского края', 'Как хорошо летом в Твери', 'ох как же я люблю Россию', 'у бабули на даче', 'любимый Воронеж', 'апрель 2010', 'Мой лучший друг', 'Красивые виды', 'описание не придумал'
]


let commentId = getRandomPositiveInteger(1, 1000);
let commentAvatar = `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`

let commentMessage = [
  'скоро, на всех улицах страны..', 'лмао', 'Эти кабачки в ушах...' , 'Инопланетяне,прилетайте скорее, только глобальная внешняя угроза может сплотить человечество и заставить его забыть о войнах между собой! На вас вся надежда, миленькие!', 'зачем такое выкладывать?', 'это фотошоп, я программист, меня не обманешь', 'здорово', 'ну ты даешь аха как на выпускном', 'Привет ахах', 'фото хорошее, но лучше попить пива', 'лучшие фото в моем профиле', 'Прелесть метода .from в том, что вторым аргументом ему можно передать функцию, результатами выполнения которой метод наполнит массив вместо undefined.'
]

let commentNames = [
  'Tony', 'Boby', 'Sweet', 'Strawberry', 'Mark', 'Petro', 'Logana', 'Carlita', 'Ivan', 'Feral', 'Noskil'
]

let commentSurnames = [
  'Black', '1991', 'Star', 'Bobers', 'Goodman', 'Stark', 'White', 'Pinkman', 'Fring', 'Wise', 'Haselhoff', 'xxl', 'pwnz', 'pro'
]

const photoIndexArray = []

const createPhotoArray = () => {
for (let i = 1; i <= 25; i++) {
let result = 0 + i
photoIndexArray.push(result)
  }
}
createPhotoArray()

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





const createComment = () => {
  return {
    id: '' + commentId,
    avatar: '' + commentAvatar,
    message: '' + getRandomArrayElement(commentMessage),
    name: getRandomArrayElement(commentNames) + '' + getRandomArrayElement(commentSurnames),
  }
}
const getComments = Array.from({length: getRandomPositiveInteger(1, 9)}, createComment);

const createPhoto = () => {
  console.log(indexArray)
  return {
    id: '' + getId(),
    url: '' + `photos/${getPhotoId()}.jpg`,
    description: '' + getRandomArrayElement(descriptionArray),
    likes: '' + getRandomPositiveInteger(15, 200),
    comments: '' + getComments
  }
  }


const createPhotos = Array.from({length: 25}, createPhoto);

// const createPhotos = () => {
//   for (let i = 1; i <= 25; i++) {
//     getId();
// console.log(indexArray)
// console.log(i)
//     }
//   }



console.log(createPhotos)

console.log(indexArray)

// console.log(photoIndexArray)
