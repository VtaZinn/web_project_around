export default class FormValidator {
  constructor(config, form) {
      this._form = form
      this._input1 = document.querySelector(config.input1)
      this._input2 = document.querySelector(config.input2)
      this._button = document.querySelector(config.button)
      this._warning1 = document.querySelector(config.warning1)
      this._warning2 = document.querySelector(config.warning2)

      this.valid = this.valid.bind(this);
  }

  valid() {
    if(this._input1.value != "" && this._input2.value != "") {
      this._button.disabled = false;
      this._button.classList.remove("modal__btn-disabled");
    }else {
      this._button.disabled = true;
      this._button.classList.add("modal__btn-disabled");
  
      if (this._input1.value === "") {
        this._warning1.textContent = "Preencha este campo";
      }
  
      if (this._input2.value === "") {
        this._warning2.textContent = "Preencha este campo";
      }
    }
  }

  enableValidation() {
    this._input1.addEventListener("keyup", this.valid);
    this._input2.addEventListener("keyup", this.valid);
  }
}
