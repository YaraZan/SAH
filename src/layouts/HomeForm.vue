<template>
    <form @submit="submit"  action="" class="right__form">
        <label class="form__label" for="input-text">Как тебя зовут?</label>
        <InputName/>
        <label class="form__label" for="input-number">Сколько тебе лет?</label>
        <div class="wrapper">
            <InputAge/>
            <div class="btn-wrap">
                <ButtonMin/>
                <ButtonMax/>
            </div>
        </div>
        <button class="form__submit-start" @click="goToTestsPage">Начать</button>
    </form>
</template>

<script> 
import ButtonMin from '@/components/ButtonMin.vue';
import ButtonMax from '@/components/ButtonMax.vue';
import InputName from '@/components/InputName.vue';
import InputAge from '@/components/InputAge.vue';
import submitUser from '@/js/submitUser';
import iconsLoader from '@/helpers/testIconsLoader' 

export default {
    name: "HomeForm",
    components: { ButtonMin, ButtonMax, InputName, InputAge },
    methods: { 
        submit(e) { submitUser(e) },
        goToTestsPage() {
            this.$router.push('/tests')
        },
        setIcons() { iconsLoader() }
    }
}

</script>