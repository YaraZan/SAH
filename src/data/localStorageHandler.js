

export default class LocalStorageHandler {

  constructor() {
    this.userName;
    this.userAge;

    this.tests;
    this.questions;
    this.testName;
    this.test;
    this.options;
  }

  setTests = (tests) => { this.tests = tests }
  
  testsToLs = (tests) => {
    this.setTests(tests);
    this.saveToLocalStorage();
  }

  setUser = (userObj) => { 
    localStorage.setItem('Current_user:', JSON.stringify(userObj))
  }

  getUser = () => {
    const user = JSON.parse(localStorage.getItem('Current_user:'))
    const userNm = user.name

    return userNm
  }

  getUserName = () => {
    const user = JSON.parse(localStorage.getItem('Current_user:')) || []
    this.userName = user.name
    this.userAge = user.age
    return this.userName
  }

  testsFromLs() {
    return JSON.parse(localStorage.getItem(`User_${this.getUser()}`)) || [];
  }

  saveToLocalStorage() {
    localStorage.setItem(`User_${this.getUserName()}`, JSON.stringify(this.tests));
  }

  getTestByName(testName) {
    const tests = this.testsFromLs()
    return tests.find(test => test.name === testName);
  }

  setTestAsPassed(testName) {
    const tests = this.testsFromLs()

    for (const test of tests) { if ( test.name == testName ) { test.status = 'passed' } }

    this.testsToLs(tests)
  }

  startSession = (test) => {
    const testObj = this.getTestByName(test)
    localStorage.setItem(`Test_${testObj.name}`, JSON.stringify(testObj))
    this.testName = testObj.name;
    this.test = testObj;
  }

  endSession = (testName) => {
    localStorage.removeItem(`Test_${testName}`)
  }

  getQuestionsByTestName = (testName) => { 
    const testObj = JSON.parse(localStorage.getItem(`Test_${testName}`))
    return testObj.questions
  }

  changeQuestionStatus = (questionName) => {
    const questions = this.getQuestions()
    questions.forEach(que => {
      if (que.name == questionName) { que.passed = true }
    })

    this.test.questions = questions

    localStorage.setItem(`Test_${this.testName}`, JSON.stringify(this.test))
  }

  getOptions = () => {
    const questions = this.getQuestions()
    const options = []

    questions.find(que => {
      if (!que.passed) { options.push(que.options) }
    })

    this.options = options

    return options
  } 

  getImage = (test) => {
    if ( test == 'Физические нагрузки' ) { return 'physics' }
    if ( test == 'Правильное питание' ) { return 'meal' }
    if ( test == 'Здоровый сон' ) { return 'sleep' }
  }
}