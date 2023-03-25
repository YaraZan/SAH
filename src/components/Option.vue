<!-- eslint-disable vue/valid-template-root -->
<template>
    <input type="button" :value="text" class="option">
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'OptionInput',
        props: {
            text: String
        }
    }
</script>

<style> 
.option {
    background: #313131;
    border-radius: 10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #FFFFFF;

    width: calc((100% / 2) - 20px);
    padding: 22px 50px;
    border: none;
    margin-bottom: 20px;
    transition: all .1s ease-in;
}

.option:hover {
    background: #444444;
}

.option:active {
    background: #2FCC59;
}
</style>