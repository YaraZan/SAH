<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="interact-zone__card">
        <div class="upper-block">{{ testName }}</div>
        <div class="card-hover">
            <div class="card__icon"></div>
            <span class="hover-1"></span>
            <span class="hover-2"></span>             
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestCard',
    props: {
        testName: String,
        iconClassName: String
    }
}
</script>