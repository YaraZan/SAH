<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="session-quiz-pick__container">

        <div :class="image" class="question__icon"></div>
        <span class="question__test-title">{{ test }}</span>
        <QuestionProgressbar/>
        <QuestionBody @on-answer-selected="answerSelected" :question="questions[currentQuestion]"/>

    </div>
</template>

<script>
import QuestionProgressbar from '@/layouts/QuestionProgressbar.vue';
import QuestionBody from '@/layouts/QuestionBody.vue';
import LocalStorageHandler from '@/data/localStorageHandler';



export default {
// eslint-disable-next-line vue/multi-word-component-names
name: "Question",
props: {
    testName: String,
},
data() {
    return {
        currentQuestion: 0,
        questions: [],
        image: null,
        test: this.$root.$test
    }
},
created() {
    this.getQue(),
    this.getImg()
},
components: { QuestionProgressbar, QuestionBody },
methods: {
    getQue() {
        const lsHandler = new LocalStorageHandler()
        this.questions = lsHandler.getQuestionsByTestName(this.$root.$test)
    },
    getImg() {
        const lsHandler = new LocalStorageHandler()
        this.image = lsHandler.getImage(this.$root.$test)
    },
    answerSelected( index ) {
        if (this.questions[this.currentQuestion].selectedAnswer != null) return false
        this.questions[this.currentQuestion].selectedAnswer = index
        this.currentQuestion++
    }
}
}
</script>

<style> 
    .question__icon {
        background-size: 30px 30px;
        background-repeat: no-repeat;
        background-position: center center;
        width: 70px;
        height: 70px;
        background-color: #2FCC59;
        border-radius: 50px;
        margin-bottom: 20px;
    }

    .question__test-title {
        background: #2FCC59;
        border-radius: 50px;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #FFFFFF;
        padding: 10px 47px;
        margin-bottom: 20px;
    }

    .physics { background-image: url('../assets/physics.svg'); }
    .meal { background-image: url('../assets/meal.svg'); }
    .sleep { background-image: url('../assets/sleep.svg'); }


</style>