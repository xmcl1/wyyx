<template>
    <div class="index">
        <index-header></index-header>
        <index-recommend></index-recommend>
    </div>
</template>

<script>
    import indexHeader from '../components/index/indexHeader.vue';
    import indexRecommend from '../components/index/indexRecommend.vue';
    export default {
        components: {
            indexHeader,
            indexRecommend,
        }
    }
</script>

<style scoped>
    .index{
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
