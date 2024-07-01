import Popup from "./Popup.js";
import { openImage } from "./utils.js";

export default class PopupWithImage extends Popup {
    constructor(selectorPopup, data) {
        super(selectorPopup);
        this._name = data.name;
        this._link = data.link;
    }

    open() {
        openImage(this._link, this._name);
    }
}