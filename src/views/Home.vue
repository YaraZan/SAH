<template>
    <div class="start-page-container">
        <h2 class="title-main">Достаточно ли хорошо ты следишь за своим <span style="color: #2FCC59;">здоровьем</span>?</h2>
        <div class="interact-zone">
            <div class="interact-zone__left">
                <p class="left__descr">Проверь свои знания и узнай свой результат, прокачай знания о том как следить за своим питанием, нагрузками и сном.</p>
                <button class="left__button share-btn">Поделиться с друзьями</button>
                <button class="left__button more-btn">Подробнее</button>
            </div>
            <div class="interact-zone__right">
                <span class="right__descr">Заполни форму и начни играть</span>
                <HomeForm/>
            </div>
        </div>
    </div>
</template>

<script>
import HomeForm from '@/layouts/HomeForm.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
    components: { HomeForm }
}
</script>