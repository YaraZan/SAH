<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="recs-container">

        <div :class="image" class="question__icon"></div>
        <span class="question__test-title">{{ test }}</span>

        <h2 class="recs-title">Тест успешно пройден</h2>

        <span class="recs-descr">Ваши рекомендации на основе пройденного теста</span>

        <button @click="end();" class="recs-done-btn">Завершить</button>
    </div>
</template>

<script>
import LocalStorageHandler from '@/data/localStorageHandler';
import { data } from '@/data/data';

export default {
// eslint-disable-next-line vue/multi-word-component-names
name: "Recommendations",
props: {
    testName: String,
},
data() {
    return {
        image: null,
        test: this.$root.$test
    }
},
created() {
    this.getImg()
},
methods: {
    getImg() {
        const lsHandler = new LocalStorageHandler()
        this.image = lsHandler.getImage(this.$root.$test)
    },
    end() {
        const lsHandler = new LocalStorageHandler()
        lsHandler.endSession(this.$root.$test)
        data.increment()
        this.$router.push('/tests')
    }
}
}
</script>

<style>
.recs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.recs-title {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    margin-bottom: 15px;

    color: #FFFFFF;
}

.recs-descr {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    margin-bottom: 100px;

    text-align: center;

    color: #FFFFFF;
}

.recs-done-btn {
    background-image: url('../assets/log-out.png');
    background-repeat: no-repeat;
    background-position: 15% center;
    background-size: 24px 24px;
    background-color: #313131;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #FFFFFF;
    border: none;
    border-radius: 10px;

    padding: 17px 26px 17px 70px;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                margin 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.recs-done-btn:hover {
    background-color: #5a5a5a;
    transform: scale(1.1);
    margin: 10px 5px 
}
</style>