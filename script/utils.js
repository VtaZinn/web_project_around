export function openImage (link, name) {
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

  export function closeImg(opacityImg) {
    opacityImg.remove();
  }
  


export function likeCard(evt) {
  evt.target.classList.toggle("elements__button-likeBlack");
}


const modal = document.getElementById("modal");
const modalAddCard = document.getElementById("modalAddCard");
const nameUser = document.getElementById("name");
const aboutMe = document.getElementById("aboutMe");
const inputName = document.getElementById("inputName");
const inputAboutMe = document.getElementById("inputAboutMe");

export function openModal() {
  inputName.value = nameUser.innerText;
  inputAboutMe.value = aboutMe.innerText;
  modal.classList.add("popup_opened");
}

export function closeModal() {
  modal.classList.remove("popup_opened");
}

modal.addEventListener("click" , function(evt){
  if(evt.target==modal){
    closeModal();
  }
});

export function openModalAddCard() {
  modalAddCard.classList.add("popup_opened");
}

export function closeModalCard() {
  modalAddCard.classList.remove("popup_opened");
}

modalAddCard.addEventListener("click" , function(evt){
  if(evt.target==modalAddCard){
    closeModalCard();
  }
});

