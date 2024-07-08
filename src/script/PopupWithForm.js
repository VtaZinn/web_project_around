import Popup from "./Popup.js";


export default class PopupWithForm extends Popup {
    constructor(selectorPopup, save) {
        super(selectorPopup);
        this._save = save;
    }

    _getInputValues() {
        const form = this.modal.querySelector(".form");
        const formFields = form.querySelectorAll('.formField');

        const formData = {};

        formFields.forEach(function(field) {
            formData[field.name] = field.value;
        });
        return formData;
    }

    closeModal() {
        const form = this.modal.querySelector("form");
        form.reset();
        this.close();
    }

    setEventListeners(){
        const button = this.modal.querySelector("#buttonSaveAvatar");

        if(button){
            const close = () => this.close();
            button.addEventListener("click", (evt)=>{
                evt.preventDefault();
                this._save().then(()=>{
                    close();
                    window.location.reload();
                });
            });
        }
    }
}