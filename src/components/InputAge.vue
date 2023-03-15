<template>
    <input @input="inputData()" class="form__input input-number" id="input-number" type="text">
</template>

<script>
import Functional from '@/helpers/functional';

export default {
    name: 'InputAge',
    methods: { inputData() { const valid = new Functional(); valid.validateNumberNan()} }
}

</script>
