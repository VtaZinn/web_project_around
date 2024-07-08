import Api from "./Api.js";
import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(selectorPopup, id) {
        super(selectorPopup);
        this._id = id;
    }

    setEventListeners(){
        const button = this.modal.querySelector("#buttonDelete");
        const close = ()=> this.close();
        button.addEventListener("click",(evt) =>{
            evt.preventDefault()
            const api = new Api();
            api.deleteCard(this._id).then(()=>{
                close()
                window.location.reload()
            });

        });
    }
}