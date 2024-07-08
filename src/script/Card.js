import Api from "./Api.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
import PopupWithImage from "./PopupWithImage.js";
import { likeCard} from "./utils.js";

export default class Card {
    constructor(data, selector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = selector;
        this._likes = data.likes;
        this._owner = data.owner.name;
        this._id = data._id;
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
        this._element.querySelector("#numberLike").textContent = this._likes.length;
        this._setEventListener();

        return this._element;
    }

    _setEventListener() {
        const image = this._element.querySelector(".elements__content-img");
        image.addEventListener("click", () => {
            const popup = new PopupWithImage(".opacityImg", {link: this._link, name: this._name});
            popup.setEventListeners();
            popup.open();
          });
        const api = new Api();

        const buttonLike = this._element.querySelector(".elements__button-like")
        const buttonDelete = this._element.querySelector(".deleteCard");
        
        Promise.resolve(api.getUserInfo()).then((userInfo)=>{
            if(this._owner == userInfo.name){
                buttonDelete.classList.remove("displayNone");
            }
            const liked = this._likes.find((like)=>{
                return like.name == userInfo.name
            })

            if(liked){
                this._element.querySelector(".elements__button-like").classList.add("elements__button-likeBlack");
                buttonLike.addEventListener("click",()=>{
                    Promise.resolve(api.deleteLike(this._id)).then(data=>data.json()).then((like)=>{
                        this._element.querySelector("#numberLike").textContent = like.likes.length;
                        this._element.querySelector(".elements__button-like").classList.remove("elements__button-likeBlack")
                    });
                    return likeCard
                } );
            }else{
                buttonLike.addEventListener("click",()=>{
                    Promise.resolve(api.setLike(this._id)).then(data=>data.json()).then((like)=>{
                        this._element.querySelector("#numberLike").textContent = like.likes.length;
                        this._element.querySelector(".elements__button-like").classList.add("elements__button-likeBlack")
                    });
                    return likeCard
                } );
            }
        })
        
        buttonDelete.addEventListener("click", () => deleteCard(this._id));
    }

}

export function deleteCard(id) {
    const popup = new PopupWithConfirmation("#modalDeleteCard", id);
    
    popup.open();
    popup.setEventListeners();
  }