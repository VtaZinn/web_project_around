export default class Api {
    constructor(options) {

    }
  
    getInitialCards() {
        return fetch("https://around.nomoreparties.co/v1/web-ptbr-cohort-11/cards", {
            headers: {
                authorization: "864cc0f7-08e9-4957-a9c8-17a446b450e9",
                "Content-Type": "application/json"
              }
          })
            .then(res => {
              if (res.ok) {
                return res.json();
              }
            })
            .catch((err) => {
              console.log(err); 
            });
    }

    getUserInfo() {
        return fetch("https://around.nomoreparties.co/v1/web-ptbr-cohort-11/users/me", {
            headers: {
                authorization: "864cc0f7-08e9-4957-a9c8-17a446b450e9",
                "Content-Type": "application/json"
              }
          })
            .then(res => {
              if (res.ok) {
                return res.json();
              }
            })
            .catch((err) => {
              console.log(err); 
            });
    }

    setUserInfo(name, about) {
        return fetch("https://around.nomoreparties.co/v1/web-ptbr-cohort-11/users/me",{
            method: "PATCH",
                headers: {
                    authorization: "864cc0f7-08e9-4957-a9c8-17a446b450e9",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    about: about
                })
        })
        .catch((err) => {
          console.log(err); 
        });
    }

    setCard(name, link){
        return fetch("https://around.nomoreparties.co/v1/web-ptbr-cohort-11/cards", {
            method: "POST",
                headers: {
                    authorization: "864cc0f7-08e9-4957-a9c8-17a446b450e9",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    link: link
                })
        })
        .catch((err) => {
          console.log(err); 
        });
    }

    deleteCard(id){
      return fetch(`https://around.nomoreparties.co/v1/web-ptbr-cohort-11/cards/${id}`,{
        method: "DELETE",
          headers: {
            authorization: "864cc0f7-08e9-4957-a9c8-17a446b450e9",
            "Content-Type": "application/json"
          }
      })
      .catch((err) => {
        console.log(err); 
      });
    }

    setLike(id){
      console.log(id)
      return fetch(`https://around.nomoreparties.co/v1/web-ptbr-cohort-11/cards/likes/${id}`,{
        method: "PUT",
          headers: {
            authorization: "864cc0f7-08e9-4957-a9c8-17a446b450e9",
            "Content-Type": "application/json"
          }
      })
      .catch((err) => {
        console.log(err); 
      });
    }

    deleteLike(id){
      return fetch(`https://around.nomoreparties.co/v1/web-ptbr-cohort-11/cards/likes/${id}`,{
        method: "DELETE",
          headers: {
            authorization: "864cc0f7-08e9-4957-a9c8-17a446b450e9",
            "Content-Type": "application/json"
          }
      })
      .catch((err) => {
        console.log(err); 
      });
    }

    setAvatar(url){
      return fetch("https://around.nomoreparties.co/v1/web-ptbr-cohort-11/users/me/avatar",{
        method: "PATCH",
          headers: {
            authorization: "864cc0f7-08e9-4957-a9c8-17a446b450e9",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            avatar: url
        })
      })
      .catch((err) => {
        console.log(err); 
      });
    }
  
  }
  
