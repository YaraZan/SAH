
export default class Question {
    constructor(text, variablesArray, correctAnswer) {
        this.text = text
        this.variablesArray = variablesArray,
        this.correctAnswer = correctAnswer,
        this.isPassed = false
    }

    setCorrectAnswer = (query) => { this.correctAnswer = query }

    setPassed = () => { this.isPassed = true }
}