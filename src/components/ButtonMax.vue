<template>
    <span @click="plusValue()" class="input-number-max"></span>
</template>

<script>
import Functional from '@/helpers/functional';

export default {
    name: 'ButtonMax',
    methods: { plusValue() { const valid = new Functional(); valid.btnMaxBind()} }
}

</script>