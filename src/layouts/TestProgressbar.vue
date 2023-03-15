<template>
    <span class="quiz__done">Пройдено {{ testsDone }} / 3</span>
    <div class="quiz__progress-bar">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
</template>

<script> 
export default {
    name: 'TestProgressbar',
    props: {
        testsDone: String
    }
}
</script>