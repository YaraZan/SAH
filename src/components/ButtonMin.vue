<template>
    <span @click="minusValue()" class="input-number-min"></span>
</template>

<script>
import Functional from '@/helpers/functional';

export default {
    name: 'ButtonMin',
    methods: { minusValue() { const valid = new Functional(); valid.btnMinBind()} }
}

</script>