import Test from '@/js/test'


export default class LocalStorageHandler {

  constructor() {

    this.key;
    this.testName;
    this.questionName;
    this.testsArray;
    this.questionsArray;
    this.test = new Test()

  }
  
  /* MAIN METHODS */
  getKey = () => { return this.key }

  setKey = (key) => { this.key = key}

  setTestName = (name) => { this.testName = name}

  setQuestionsArray = (arr) => { this.questionsArray = arr}

  /* Inner methods */
  _readLocalStorageData = (key) => { return JSON.parse(localStorage.getItem(key)) }

  _writeLocalStorageData = (key, data) => { localStorage.setItem(key, JSON.stringify(data)) }

  _normalizeArrayForWriting = (arr) => {
    const test = {};
    test.testName = this.testName;
    test.questionsArray = this.questionsArray;
    arr.push(test)
  } 


  setTest = (key, testName, questionsArray) => {
    this.setKey(key);

    this.setTestName(testName)

    this.setQuestionsArray(questionsArray)

    const lsData = this._readLocalStorageData(this.getKey())

    this._writeLocalStorageData(this._normalizeArrayForWriting(lsData))
  }

  /* editTest = () => {} */


}