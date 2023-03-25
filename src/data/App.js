
export default class Application {
    
    constructor(username) {
      this.username = username;

      this.testName;
      this.questionName;
      this.tests = [];
      this.questions = [];
      this.options = [];
      this.answer;
    }

    _normalizeTest = (test) => {
      this.setTestName(test)

      const testObj = {};
      testObj.name = this.testName;
      testObj.questions = this.questions;
      testObj.status = 'avaliable'
      this.tests.push(testObj)
    } 

    _normalizeQuestion = (question, answer) => {
      this.setQuestionName(question)
      this.setAnswer(answer)

      const queObj = {};
      queObj.name = this.questionName;
      queObj.options = this.options;
      queObj.status = 'notpassed';
      queObj.answer = this.answer
      this.questions.push(queObj)
    }
  
    addTest(test) {
      this._normalizeTest(test)
      this.saveToLocalStorage();
    }
  
    addQuestion(testName, question) {
      const test = this.getTestByName(testName);
      if (test) {
        test.questions.push(question);
        this.saveToLocalStorage();
      }
    }
  
    removeQuestion(testName, questionName) {
      const test = this.getTestByName(testName);
      if (test) {
        const index = test.questions.findIndex(q => q.name === questionName);
        if (index !== -1) {
          test.questions.splice(index, 1);
          this.saveToLocalStorage();
        }
      }
    }
  
    getAllTests() {
      return JSON.parse(localStorage.getItem(`User_${this.username}`)) || [];
    }
  
    setTestAsPassed(testName) {
      const test = this.getTestByName(testName);
      if (test && this.checkTestPassed(test)) {
        test.status = 'passed';
        this.saveToLocalStorage();
        this.generateRecommendations();
        if (this.checkAllTestsPassed()) {
          const certificate = this.getCertificate();
          this.sendCertificateToUser(certificate);
        }
      }
    }
  
    getTestByName(testName) {
      return this.tests.find(test => test.name === testName);
    }
  
    checkTestPassed(test) {
      return test.questions.every(question => question.status === 'passed');
    }
  
    checkAllTestsPassed() {
      return this.tests.every(test => test.status === 'passed');
    }
  
    getCertificate() {
      const totalQuestions = this.tests.reduce((acc, test) => acc + test.questions.length, 0);
      const totalCorrectAnswers = this.tests.reduce((acc, test) => {
        return acc + test.questions.reduce((acc2, question) => {
          return acc2 + (question.status === 'passed' ? 1 : 0);
        }, 0);
      }, 0);
      const percentageCorrect = (totalCorrectAnswers / totalQuestions) * 100;
      if (percentageCorrect === 100) {
        return 'Pro';
      } else if (percentageCorrect >= 70) {
        return 'Medium';
      } else {
        return 'Usual';
      }
    }
  
    /* generateRecommendations() {
      const age = this.getUserAge();
      const physicalActivityRecommendations = this.getPhysicalActivityRecommendations(age);
      const properNutritionRecommendations = this.getProperNutritionRecommendations(age);
      const healthySleepRecommendations = this.getHealthySleepRecommendations(age);
      // Store recommendations in the app
    }
  
    getUserAge() {
      // You'll need to implement this method based on how you're storing the user's age
    }
  
    getPhysicalActivityRecommendations(age) {
      // You'll need to implement this method based on the recommendations you want to give for physical activity
    }
  
    getProperNutritionRecommendations(age) {
      // You'll need to implement this method based on the recommendations you want to give for proper nutrition
    }
  
    getHealthySleepRecommendations(age) {
      // You'll need to implement this method based on the recommendations you want to give for healthy sleep
    }

    sendCertificateToUser(certificate) {
      // You'll need to implement this method to send the certificate to the user
    } */
  
    saveToLocalStorage() {
      localStorage.setItem(`User_${this.username}`, JSON.stringify(this.tests));
    }

    setTestName = (name) => { this.testName = name}
  
    setQuestionName = (name) => { this.questionName = name}

    setAnswer = (answer) => { this.answer = answer}
  }