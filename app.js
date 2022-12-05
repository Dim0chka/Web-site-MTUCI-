const hamb = document.querySelector("#hamb")
const popup = document.querySelector("#popup")
const body = document.body

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

// slider
document.addEventListener('DOMContentLoaded', function () {
  // инициализация слайдера
  let slider = new SimpleAdaptiveSlider('.slider', {
    autoplay: true,
    interval: 5000,
  });
});

const card1 = document.querySelector("#card1") // карточка Ксения 
const card2 = document.querySelector("#card2") // карточка Мария 
const card3 = document.querySelector("#card3") // карточка Валерия 
const card4 = document.querySelector("#card4") // карточка Дарья 

const elem1 = document.querySelector("#img_card1") // фото Ксения
const elem2 = document.querySelector("#img_card2") // фото Мария
const elem3 = document.querySelector("#img_card3") // фото Валерия
const elem4 = document.querySelector("#img_card4") //фото Дарья 

const link1 = document.querySelector("#link1") // текст-ссылка Ксения
const link2 = document.querySelector("#link2")
const link3 = document.querySelector("#link3")
const link4 = document.querySelector("#link4")



// карточка Ксения 
elem1.addEventListener('mouseover', function(){
  elem1.classList.add("img__hover")
  card1.classList.add("card__hover")
  link1.classList.add("name__hover")
  link1.style.color = "#6B57AE"
})

elem1.addEventListener('mouseout', function(){
  elem1.classList.remove("img__hover")
  card1.classList.remove("card__hover")
  link1.classList.remove("name__hover")
  link1.style.color = "white"
})

link1.addEventListener('mouseover', function(){
  card1.classList.add("card__hover")
  link1.style.color = "#6B57AE"
  link1.classList.add("name__hover")
  elem1.classList.add("img__hover")
})

link1.addEventListener('mouseout', function(){
  card1.classList.remove("card__hover")
  link1.style.color = "white"
  link1.classList.remove("name__hover")
  elem1.classList.remove("img__hover")
})


// карточка Мария 

elem2.addEventListener('mouseover', function(){
  elem2.classList.add("img__hover")
  card2.classList.add("card__hover")
  link2.style.color = "#6B57AE"
  link2.classList.add("name__hover")
})

elem2.addEventListener('mouseout', function(){
  elem2.classList.remove("img__hover")
  card2.classList.remove("card__hover")
  link2.classList.remove("name__hover")
  link2.style.color = "white"
})

link2.addEventListener('mouseover', function(){
  card2.classList.add("card__hover")
  link2.style.color = "#6B57AE"
  link2.classList.add("name__hover")
  elem2.classList.add("img__hover")
})

link2.addEventListener('mouseout', function(){
  card2.classList.remove("card__hover")
  link2.style.color = "white"
  link2.classList.remove("name__hover")
  elem2.classList.remove("img__hover")
})

// карточка Валерии

elem3.addEventListener('mouseover', function(){
  elem3.classList.add("img__hover")
  card3.classList.add("card__hover")
  link3.style.color = "#6B57AE"
  link3.classList.add("name__hover")
})

elem3.addEventListener('mouseout', function(){
  elem3.classList.remove("img__hover")
  card3.classList.remove("card__hover")
  link3.style.color = "white"
  link3.classList.remove("name__hover")
})

link3.addEventListener('mouseover', function(){
  card3.classList.add("card__hover")
  link3.style.color = "#6B57AE"
  link3.classList.add("name__hover")
  elem3.classList.add("img__hover")
})

link3.addEventListener('mouseout', function(){
  card3.classList.remove("card__hover")
  link3.style.color = "white"
  link3.classList.remove("name__hover")
  elem3.classList.remove("img__hover")
})

// карточка Даши

elem4.addEventListener('mouseover', function(){
  elem4.classList.add("img__hover")
  card4.classList.add("card__hover")
  link4.style.color = "#6B57AE"
  link4.classList.add("name__hover")
})

elem4.addEventListener('mouseout', function(){
  elem4.classList.remove("img__hover")
  card4.classList.remove("card__hover")
  link4.style.color = "white"
  link4.classList.remove("name__hover")
})

link4.addEventListener('mouseover', function(){
  card4.classList.add("card__hover")
  link4.style.color = "#6B57AE"
  link4.classList.add("name__hover")
  elem4.classList.add("img__hover")
})

link4.addEventListener('mouseout', function(){
  card4.classList.remove("card__hover")
  link4.style.color = "white"
  link4.classList.remove("name__hover")
  elem4.classList.remove("img__hover")
})


