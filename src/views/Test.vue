<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="session-quiz-pick__container">
        
        <h2 class="quiz__title">Дело за малым!</h2>
        <p class="quiz__descr">Пройди 3 теста, узнай свои результаты и получи сертификат!</p>

        <TestProgressbar testsDone="1"/>

        <div class="quiz__interact-zone">

            <TestCard testName="Физические нагрузки"/>

            <TestCard testName="Правильное питание"/>

            <TestCard testName="Здоровый сон"/>

        </div>

    </div>
</template>

<script>
import TestCard from '@/layouts/TestCard.vue';
import TestProgressbar from '@/layouts/TestProgressbar.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Test",
    props: {
        totalDone: Number
    },
    components: { TestCard, TestProgressbar } 
}
</script>