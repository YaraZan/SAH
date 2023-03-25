
<template>
    <div class="quiz__progress">
        <div class="quiz__progress-bar" :style="[{'width': `${percent}%`}]"></div>
    </div>
</template>

<script> 
export default {
    name: 'QuestionProgressbar',
    props: {
        percent: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>
.quiz__progress {
    background-color: #313131;
    width: 100%;
    height: 16px;
    display: flex;
    border-radius: 100px;
    margin-bottom: 100px;
    
}

.quiz__progress-bar {
    background-color: #2FCC59;
    border-radius: 10px;
    height: 100%;
}
</style>