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
        <button class="form__submit-start">Начать</button>
    </form>
</template>

<script> 
import ButtonMin from '@/components/ButtonMin.vue';
import ButtonMax from '@/components/ButtonMax.vue';
import InputName from '@/components/InputName.vue';
import InputAge from '@/components/InputAge.vue';
import iconsLoader from '@/helpers/testIconsLoader' 
import Validation from '@/helpers/validation';
import LocalStorageHandler from '@/data/localStorageHandler';


export default {
    name: "HomeForm",
    components: { ButtonMin, ButtonMax, InputName, InputAge },
    methods: { 
        submit(e) {     
            e.preventDefault()
            const valid = new Validation()
            if (valid.validateStartForm() == true) {
                const name = document.querySelector('.input-text');
                const age = document.querySelector('.input-number');

                const userName = name.value;
                const userAge = age.value;

                const user = {}
                user.name = userName
                user.age = userAge

                const lsHandler = new LocalStorageHandler()
                lsHandler.setUser(user)

                this.$router.push('/tests');
        }},
        setIcons() { iconsLoader() }
    }
}

</script>