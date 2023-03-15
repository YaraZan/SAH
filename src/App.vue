<template>
      <div class="container">
        <HomeHeader/>

        <div class="app-container">
            <RouterView></RouterView>
        </div>

        <div class="ps">
            <HomeBottomBorderline/>
        </div>
    </div>
</template>

<script>
import HomeBottomBorderline from './layouts/HomeBottomBorderline.vue';
import HomeHeader from './layouts/HomeHeader.vue';


export default {
  name: 'App',
  components: { HomeHeader, HomeBottomBorderline }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

@import '../src/css/quiz-session.css';

@import '../src/css/start-session.css';


*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

:root {
    --main-black: #272727;
    --ps: #B3B3B3;
}

/* #app {
    font-family: 'Raleway', 'Sans-serief';
    background: var(--main-black);
    margin: 0;
} */

body {
  font-family: 'Raleway', 'Sans-serief';
  background: var(--main-black);
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
input {
    margin: 0;
    padding: 0;
}

/* Статичные заголовок и подпись*/

.header {
    padding: 41px 0px;
}

.ps {
    position: absolute;
    bottom: 0;
}

.ps__description {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    padding: 36px;
    color: var(--ps);
}

/* Главный контейнер выравнивания*/

.container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 1120px;
    justify-content: center;
    align-items: center;
}

/* Контейнер приложения */

.app-container {
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    width: 1120px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
}







</style>
