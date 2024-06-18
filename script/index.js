import Card from "./Card.js";
import FormValidator from "./FormValidator.js"
import { openModal, openModalAddCard, closeModal, closeModalCard} from "./utils.js";

const buttonEdit = document.getElementById("ButtonEdit");
const buttonClose = document.getElementById("buttonClose");
const buttonSave = document.getElementById("buttonSave");
buttonEdit.addEventListener("click", openModal);
buttonClose.addEventListener("click", closeModal);


const buttonAddCard = document.getElementById("ButtonAddCard");
buttonAddCard.addEventListener("click",openModalAddCard);
const buttonCloseCard = document.getElementById("buttonCloseCard");
buttonCloseCard.addEventListener("click", closeModalCard);
const buttonSaveCard = document.getElementById("buttonSaveCard");
const inputTitleCard = document.getElementById("inputCardTitle");
const inputLinkImage= document.getElementById("inputLinkImage");


const nameUser = document.getElementById("name");
const aboutMe = document.getElementById("aboutMe");
const inputName = document.getElementById("inputName");
const inputAboutMe = document.getElementById("inputAboutMe");



function save(evt) {
  evt.preventDefault();
  if(inputName.value != "" && inputAboutMe.value != "") {
    nameUser.innerText = inputName.value;
    aboutMe.innerText = inputAboutMe.value;
    closeModal();
  }
}

function saveCard(evt) { 
  evt.preventDefault();
  if(inputTitleCard.value != "" && inputLinkImage.value != "") {
    addCard(inputTitleCard.value, inputLinkImage.value);
    closeModalCard();
  }
}

function addCard (name, link) {
  const card = new Card({name: name, link:link}, ".card")
  const newCard = card.generateCard();

  const elements = document.querySelector(".elements");
  elements.prepend(newCard);
}


const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

initialCards.forEach((item) => {
  const card = new Card(item, ".card")
  const newCard = card.generateCard();

  const elements = document.querySelector(".elements");
  elements.prepend(newCard);
});

function removeCard(elements) {
  elements.remove();
}

const formEdit = document.querySelector(".formEdit");
formEdit.addEventListener("submit", save);
const formCard = document.querySelector(".formCard");
formCard.addEventListener("submit", saveCard);

const edit = new FormValidator({
  input1: "#inputName",
  input2: "#inputAboutMe",
  button: "#buttonSave",
  warning1: "#Alert-text",
  warning2: "#AlertAbout",
},formEdit)
edit.enableValidation();

const card = new FormValidator({
  input1: "#inputCardTitle",
  input2: "#inputLinkImage",
  button: "#buttonSaveCard",
  warning1: "#localName",
  warning2: "#linkImage",
},formCard)
card.enableValidation();





