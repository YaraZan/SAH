<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="session-quiz-pick__container">
        
        <h2 class="quiz__title">Дело за малым!</h2>
        <p class="quiz__descr">Пройди 3 теста, узнай свои результаты и получи сертификат!</p>

        <TestProgressbar :testsDone="done" :percent="percent"/>

        <div class="quiz__interact-zone">

            <TestCard
                v-for="(test, index) in tests"
                :key="index"
                :testName="test.name"
                :class="setImg(test.name)"
                v-on:click="start(test.name)"
            ></TestCard>

        </div>

    </div>
</template>

<script>
import TestCard from '@/layouts/TestCard.vue';
import TestProgressbar from '@/layouts/TestProgressbar.vue';
import LocalStorageHandler from '@/data/localStorageHandler';
import { data } from '@/data/data';


export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Test",
    props: {
        totalDone: Number
    },
    components: { TestCard, TestProgressbar },
    data() {
      return {
        tests: [],
        percent: 0,
        done: 0
      };
    },
    created() {
      this.loadTests();
    },
    methods: {

      loadTests() {
        const lsHandler = new LocalStorageHandler()
        lsHandler.testsToLs(data);
        const tests = lsHandler.testsFromLs();
        this.tests = tests.map((test) => {
          return {
            name: test.name,
            questions: test.questions,
            status: test.status,
          };
        });
        console.log(tests)
        console.log(this.tests)
      },

      start(testName) {
        const lsHandler = new LocalStorageHandler()
        lsHandler.startSession(testName)
        this.$root.$test = testName;
        this.$router.push('/question');

        this.done = lsHandler.doneTests()
        this.percent = lsHandler.percentForTestProgressBar()
      },
      setImg(testName) { 
        if ( testName == 'Физические нагрузки' ) { return 'physics-icon' }
        if ( testName == 'Правильное питание' ) { return 'meal-icon' }
        if ( testName == 'Здоровый сон' ) { return 'sleep-icon' }
      }
    },
}
</script>

<style> 
.physics-icon .card__icon {
    background-image: url('../assets/physics.svg');
}

.meal-icon .card__icon {
    background-image: url('../assets/meal.svg');
}

.sleep-icon .card__icon {
    background-image: url('../assets/sleep.svg');
}
</style>