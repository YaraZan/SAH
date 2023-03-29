<template>
    <div class="question__body">
        <span class="question__title">{{ question.name }}</span>
        <div class="question__options">
            <OptionInput 
            @click="$emit('onAnswerSelected', index)" 
            v-for="(option, index) in question.options"
            :key="index"
            :text="option"
            v-on:click="checkDone()"
            />
        </div>
    </div>
</template>

<script>
import OptionInput from '@/components/Option.vue';

export default {
    name: 'QuestionBody',
    props: { 
        question: {
            type: String
        }
    },
    components: { OptionInput },
    methods: {
        checkDone() {
            this.$parent.checkDone()
        }
    }
}

</script>

<style>
.question__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 750px;
}
.question__title {
    width: 100%;
    background: #313131;
    border-radius: 10px;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */
    text-align: center;
    color: #FFFFFF;
    padding: 45px 0;
    margin-bottom: 20px;
}

.question__options {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>