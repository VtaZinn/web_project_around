import { closeImg } from "./utils.js";

export default class Popup {
    constructor (selectorPopup) {
        this.modal = document.querySelector(selectorPopup);
    }

    open() {
        this.modal.classList.add("popup_opened");
    }

    close(){
        if(this.modal) {
            this.modal.classList.remove("popup_opened");
        }else {
            closeImg();
        }
    }

    _handleEscClose() {
        const closeModal = () => this.close();
        document.addEventListener("keyup", function(evt) {
            if(evt.code == "Escape"){
                closeModal();
            }  
        })
    }

    setEventListeners() {
        this._handleEscClose();
    }
}