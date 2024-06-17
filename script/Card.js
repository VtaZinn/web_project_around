import {openImage, likeCard} from "./utils.js";

export default class Card {
    constructor(data, selector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = selector;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.elements__content')
        .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector(".elements__content-img").src = this._link;
        this._element.querySelector("h3").textContent = this._name;
        this._setEventListener();

        return this._element;
    }

    _setEventListener() {
        const image = this._element.querySelector(".elements__content-img");
        image.addEventListener("click", () => {
            openImage( this._link, this._name);
          });

        const buttonLike = this._element.querySelector(".elements__button-like")
        buttonLike.addEventListener("click", likeCard);
    }
}