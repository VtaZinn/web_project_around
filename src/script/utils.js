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

  export function closeImg() {
      const opacity = document.querySelector(".opacityImg");
      opacity.remove();
  }
  


export function likeCard(evt) {
  evt.target.classList.toggle("elements__button-likeBlack");
  
}

