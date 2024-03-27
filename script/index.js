let buttonEdit = document.getElementById("ButtonEdit");
let buttonClose = document.getElementById("buttonClose");
let buttonSave = document.getElementById("buttonSave");
buttonEdit.addEventListener("click", openModal);
buttonClose.addEventListener("click", closeModal);
buttonSave.addEventListener("click", save);

let nameUser = document.getElementById("name");
let aboutMe = document.getElementById("aboutMe");
let inputName = document.getElementById("inputName");
let inputAboutMe = document.getElementById("inputAboutMe");

let modal = document.getElementById("modal");

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




