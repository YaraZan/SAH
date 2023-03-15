
export default class Test {

    constructor(element) {
        this.domElement = element,
        this.name,
        this.questionsArray,
        this.isDone = false
    }

    setIcon = (elementClass) => { this.domElement.classList.add(elementClass) }

    getName = () => { return this.name};

    setName = (newName) => {this.name = newName};

    setDone = () => { this.isDone = true };

    getQuestionsArray = () => { return this.questionsArray};

    setQuestionsArray = (newQuestionsArray) => {this.questionsArray = newQuestionsArray};
}