
export default class Functional {

    constructor() {
        this.inputText = document.querySelector('.input-text');
        this.inputNumber = document.querySelector('.input-number');
        this.btnMin = document.querySelector('.input-number-min');
        this.btnMax = document.querySelector('.input-number-max');
    }

    validateTextNan = () => {
        if (isNaN(parseInt((this.inputText.value).slice(-1))) == false) {
            this.inputText.value = '';
        }
        if (this.inputText.value !== '') {
            this.inputText.classList.remove('hint')
        }
    }

    validateNumberNan = () => {
        if (isNaN(parseInt((this.inputNumber.value).slice(-1)))) {
            this.inputNumber.value = '';
        }
        if (this.inputNumber.value !== '') {
            this.inputNumber.classList.remove('hint')
        }
    }

    btnMinBind = () => {
        this.inputNumber.classList.remove('hint')

        if (this.inputNumber.value == 1 || this.inputNumber.value == 0) {
            this.inputNumber.value = '';
        }
        
        this.inputNumber.value ? this.inputNumber.value = parseInt(this.inputNumber.value) - 1 : this.inputNumber.value = '';
    }

    btnMaxBind = () => {
        this.inputNumber.classList.remove('hint')

        this.inputNumber.value ? this.inputNumber.value = parseInt(this.inputNumber.value) + 1 : this.inputNumber.value = 1;
    }

}