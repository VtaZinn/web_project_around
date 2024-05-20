const buttonEdit = document.getElementById("ButtonEdit");
const buttonClose = document.getElementById("buttonClose");
const buttonSave = document.getElementById("buttonSave");
buttonEdit.addEventListener("click", openModal);
buttonClose.addEventListener("click", closeModal);
buttonSave.addEventListener("click", save);

const buttonAddCard = document.getElementById("ButtonAddCard");
buttonAddCard.addEventListener("click",openModalAddCard);
const buttonCloseCard = document.getElementById("buttonCloseCard");
buttonCloseCard.addEventListener("click", closeModalCard);
const buttonSaveCard = document.getElementById("buttonSaveCard");
buttonSaveCard.addEventListener("click", saveCard);
const inputTitleCard = document.getElementById("inputCardTitle");
const inputLinkImage= document.getElementById("inputLinkImage");


const nameUser = document.getElementById("name");
const aboutMe = document.getElementById("aboutMe");
const inputName = document.getElementById("inputName");
const inputAboutMe = document.getElementById("inputAboutMe");

const modal = document.getElementById("modal");
const modalAddCard = document.getElementById("modalAddCard");

function openModal() {
  inputName.value = nameUser.innerText;
  inputAboutMe.value = aboutMe.innerText;
  modal.classList.add("popup_opened");
}

function closeModal() {
  modal.classList.remove("popup_opened");
}

modal.addEventListener("click" , function(evt){
  if(evt.target==modal){
    closeModal();
  }
});

function valid() {
  if(inputName.value != "" && inputAboutMe.value != "") {
    buttonSave.disabled = false;
    buttonSave.classList.remove("modal__btn-disabled");
  }else {
    buttonSave.disabled = true;
    buttonSave.classList.add("modal__btn-disabled");

    const textP = document.getElementById("Alert-text");

    if (inputName.value === "") {
      textP.textContent = "Preencha este campo";
    }

    const alertAbout = document.getElementById("AlertAbout");
    if (inputAboutMe.value === "") {
      alertAbout.textContent = "Preencha este campo";
    }
  }
}

function validCard() {
  if(inputTitleCard.value != "" && inputLinkImage.value != "") {
    buttonSaveCard.disabled = false;
    buttonSaveCard.classList.remove("modal__btn-disabled");
  }else {
    buttonSaveCard.disabled = true;
    buttonSaveCard.classList.add("modal__btn-disabled");

    const localName = document.getElementById("localName");

    if (inputCardTitle.value === "") {
      localName.textContent = "Preencha este campo";
    }

    const linkImage = document.getElementById("linkImage");
    if (inputLinkImage.value === "") {
      linkImage.textContent = "Por favor, insira um endereço web.";
    }

  }
}

inputName.addEventListener("keyup", valid);
inputAboutMe.addEventListener("keyup", valid);

inputTitleCard.addEventListener("keyup", validCard);
inputLinkImage.addEventListener("keyup", validCard);

function save() {
  if(inputName.value != "" && inputAboutMe.value != "") {
    nameUser.innerText = inputName.value;
    aboutMe.innerText = inputAboutMe.value;
    closeModal();
  }
}

// MODAL 2

function openModalAddCard() {
  modalAddCard.classList.add("popup_opened");
}

function closeModalCard() {
  modalAddCard.classList.remove("popup_opened");
}

modalAddCard.addEventListener("click" , function(evt){
  if(evt.target==modalAddCard){
    closeModalCard();
  }
});



function saveCard() {
  if(inputTitleCard.value != "" && inputLinkImage.value != "") {
    addCard(inputTitleCard.value, inputLinkImage.value);
    closeModalCard();
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
  insertImage.alt = name;
  insertImage.addEventListener("click", () => openImage(link, name));

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

function openImage (link, name) {
  const opacityImg = document.createElement("div");
  opacityImg.classList.add("opacityImg");

  const titleModal = document.createElement("div");
  titleModal.classList.add("titleModal");

  const nameModal = document.createElement("h3");
  nameModal.classList.add("nameModal");
  nameModal.textContent = name;

  const closeImage = document.createElement("div");
  closeImage.classList.add("buttonCloseImage");
  closeImage.addEventListener("click", () => closeImg(opacityImg));

  const contentModal = document.createElement("div");
  contentModal.classList.add("content-modal");

  const contentImage = document.createElement("img");
  contentImage.src = link;

    
  titleModal.append(nameModal);
  contentModal.append(contentImage);
  contentModal.append(titleModal);
  opacityImg.append(contentModal);
  contentModal.append(closeImage);
  
  const openImage = document.getElementById("openImage");
  openImage.append(opacityImg);

}

function closeImg(opacityImg) {
  opacityImg.remove();
}



