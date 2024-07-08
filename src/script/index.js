import Card from "./Card.js";
import FormValidator from "./FormValidator.js"
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import "../styles/index.css";
import Api from "../script/Api.js"

const api = new Api();

const buttonClose = document.getElementById("buttonClose");
buttonClose.addEventListener("click", function(){
  const popup = new PopupWithForm("#modal", save);
  popup.closeModal();
})

const buttonAddCard = document.getElementById("ButtonAddCard");
buttonAddCard.addEventListener("click", function(){
  const popup = new PopupWithForm("#modalAddCard", saveCard);
  popup.setEventListeners();
  popup.open();
})

const buttonCloseCard = document.getElementById("buttonCloseCard");
buttonCloseCard.addEventListener("click", function(){
  const popup = new PopupWithForm("#modalAddCard", saveCard);
  popup.closeModal();
})

const buttonCloseAvatar = document.getElementById("buttonCloseAvatar");
buttonCloseAvatar.addEventListener("click", function(){
  const popup = new PopupWithForm("#modalAvatar", saveCard);
  popup.closeModal();
})

const inputTitleCard = document.getElementById("inputCardTitle");
const inputLinkImage= document.getElementById("inputLinkImage");

const inputName = document.getElementById("inputName");
const inputAboutMe = document.getElementById("inputAboutMe");

function save(evt) {
  evt.preventDefault();
  if(inputName.value != "" && inputAboutMe.value != "") {
    const user = new UserInfo({nameSelector: "#name", workSelector: "#aboutMe"})
    user.setUserInfo(inputName.value,inputAboutMe.value);
    const popup = new PopupWithForm("#modal", save);
    
    Promise.resolve(api.setUserInfo(inputName.value, inputAboutMe.value))
    popup.closeModal();
  }
}

const buttonEdit = document.getElementById("ButtonEdit");
buttonEdit.addEventListener("click", function(){
  const popup = new PopupWithForm("#modal", save);

  const user = new UserInfo({nameSelector: "#name", workSelector: "#aboutMe"})
  const userInfo = user.getUserInfo()
  inputName.value = userInfo.name;
  inputAboutMe.value = userInfo.work;

  popup.setEventListeners();
  popup.open();
})

function saveCard(evt) { 
  evt.preventDefault();
  if(inputTitleCard.value != "" && inputLinkImage.value != "") {
    
    const popup = new Popup("#modalAddCard");
    Promise.resolve(api.setCard(inputTitleCard.value, inputLinkImage.value)
    .then((data)=>{
      return data.json()
    }).then((card)=>{
      addCard(card);
    }));
    popup.close();
  }
}

function addCard (item) {
  const card = new Card(item, ".card")
  const newCard = card.generateCard();

  const elements = document.querySelector(".elements");
  elements.prepend(newCard);
}

Promise.resolve(api.getUserInfo()).then((userInfo)=>{
  const nameUser = document.querySelector("#name");
  nameUser.textContent = userInfo.name;

  const about = document.querySelector("#aboutMe");
  about.textContent = userInfo.about;

  const avatar = document.querySelector("#avatar");
  avatar.src = userInfo.avatar;
});


Promise.resolve(api.getInitialCards()).then(initialCards=>{
  const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, ".card");
      const newCard = card.generateCard();
      cardList.addItem(newCard);
    }
  }, ".elements");

  cardList.renderer();
})

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

function avatarSave(){
    const avatarLink = document.querySelector("#inputAvatar")
    return api.setAvatar(avatarLink.value)
}

const buttonAvatar = document.querySelector(".editAvatar");

buttonAvatar.addEventListener("click", function() {
  const popup = new PopupWithForm("#modalAvatar", avatarSave);
  popup.open();
  popup.setEventListeners();
})










