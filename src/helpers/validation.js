
export default class Validation {

    constructor() {
        this.inputText = document.querySelector('.input-text');
        this.inputNumber = document.querySelector('.input-number');
        this.validationStatus = false;
    }

    getValidationStatus = () => { return this.validationStatus }

    setValidationStatus = (query) => { this.validationStatus = query }

    validateStartForm = () => {

        if (this.inputText.value == '') {
            this.inputText.classList.add('hint')
            this.inputText.placeholder = 'Введите имя!'
        } else {
            this.inputText.classList.remove('hint')
        }

        if (this.inputNumber.value == '') {
            this.inputNumber.classList.add('hint')
            this.inputNumber.placeholder = 'Введите возраст!'
        } else {
            this.inputNumber.classList.remove('hint')
        }

        if (this.inputNumber.value > 100 || this.inputNumber.value < 14) {
            this.inputNumber.classList.add('hint'),
            this.inputNumber.placeholder = 'Ваш возраст не подходит'
        } else {
            this.inputNumber.classList.remove('hint')
        }

        if (this.inputText.value !== '' && this.inputNumber.value !== '' && !(this.inputNumber.value > 100 || this.inputNumber.value < 14)) {
            this.setValidationStatus(true)
        }

        return this.getValidationStatus()
        
    }
}