let buttonEdit = document.getElementById("ButtonEdit");
let buttonClose = document.getElementById("buttonClose");
let buttonSave = document.getElementById("buttonSave");
buttonEdit.addEventListener("click", openModal);
buttonClose.addEventListener("click", closeModal);
buttonSave.addEventListener("click", save);

let buttonAddCard = document.getElementById("ButtonAddCard");
buttonAddCard.addEventListener("click",openModalAddCard);
let buttonCloseCard = document.getElementById("buttonCloseCard");
buttonCloseCard.addEventListener("click", closeModalCard);
let buttonSaveCard = document.getElementById("buttonSaveCard");
buttonSaveCard.addEventListener("click", saveCard);
let inputTitleCard = document.getElementById("inputCardTitle");
let inputLinkImage= document.getElementById("inputLinkImage");


let nameUser = document.getElementById("name");
let aboutMe = document.getElementById("aboutMe");
let inputName = document.getElementById("inputName");
let inputAboutMe = document.getElementById("inputAboutMe");

let modal = document.getElementById("modal");
let modalAddCard = document.getElementById("modalAddCard");

function openModal() {
  inputName.value = nameUser.innerText;
  inputAboutMe.value = aboutMe.innerText;
  modal.classList.add("popup_opened");
}

function closeModal() {
  modal.classList.remove("popup_opened");
}

function save() {
  if(inputName.value != "" && inputAboutMe.value != "") {
    nameUser.innerText = inputName.value;
    aboutMe.innerText = inputAboutMe.value;
    closeModal();
  } else {
    alert("Preencha todos os campos!");
  }
}

// MODAL 2

function openModalAddCard() {
  modalAddCard.classList.add("popup_opened");
}

function closeModalCard() {
  modalAddCard.classList.remove("popup_opened");
}

function saveCard() {
  if(inputTitleCard.value != "" && inputLinkImage.value != "") {
    addCard(inputTitleCard.value, inputLinkImage.value);
    closeModalCard();
  } else {
    alert("Preencha todos os campos!");
  }
}

function addCard (name, link) {
  const elements = document.querySelector(".elements");

  const elementsContent = document.createElement("div");
  elementsContent.classList.add("elements__content");

  const elementsContainerImage = document.createElement("div");
  elementsContainerImage.classList.add("elements__content-container");


  const insertImage = document.createElement("img");
  insertImage.classList.add("elements__content-img");
  insertImage.src = link;
  insertImage.addEventListener("click", () => openImage(link));

  const deleteCard = document.createElement("div");
  deleteCard.classList.add("deleteCard")
  deleteCard.addEventListener("click", () => removeCard(elementsContent));
  elementsContainerImage.append(deleteCard);
  elementsContainerImage.append(insertImage);

  const elementsContentText = document.createElement("div");
  elementsContentText.classList.add("elements__content-text");

  const title = document.createElement("h3");
  title.textContent = name;

  const buttonLike = document.createElement("button");
  buttonLike.classList.add("elements__button-like");
  buttonLike.addEventListener("click", likeCard);

  elementsContentText.append(title);
  elementsContentText.append(buttonLike);

  elementsContent.append(elementsContainerImage);
  elementsContent.append(elementsContentText);

  elements.prepend(elementsContent);
}

function likeCard(evt) {
  evt.target.classList.toggle("elements__button-likeBlack");
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

initialCards.forEach((card) => addCard(card.name, card.link));

function removeCard(elements) {
  elements.remove();
}

function openImage (link) {
  console.log("to aqui");
  const opacityImg = document.createElement("div");
  opacityImg.classList.add("opacityImg");

  const closeImage = document.createElement("div");
  closeImage.classList.add("buttonCloseImage");
  closeImage.addEventListener("click", () => closeImg(opacityImg));

  const contentModal = document.createElement("div");
  contentModal.classList.add("content-modal");

  const contentImage = document.createElement("img");
  contentImage.src = link;

  contentModal.append(contentImage);
  opacityImg.append(contentModal);
  contentModal.append(closeImage);
  
  const openImage = document.getElementById("openImage");
  openImage.append(opacityImg);
}

function closeImg(opacityImg) {
  opacityImg.remove();
}
