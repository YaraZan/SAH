<template>
    <input @input="inputData()" class="form__input input-text" id="input-text" type="text">
</template>

<script>
import Functional from '@/helpers/functional';

export default {
    name: 'InputName',
    methods: { inputData() { const valid = new Functional(); valid.validateTextNan()} }
}

</script>