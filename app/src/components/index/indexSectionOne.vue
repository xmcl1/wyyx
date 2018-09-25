<template>
    <div class="indexOnlyImg">
        <img  v-for="(m,secO) in secOne" :key="secO" :src="m" alt="">
        <!-- <img src="../../assets/img/img2/index-secOne-2.png" alt="">
        <img src="../../assets/img/img2/index-secOne-3.png" alt="">
        <img src="../../assets/img/img2/index-secOne-4.png" alt=""> -->
    </div>
</template>

<script>
    export default {
        props:["secOne"],
        components: {
    
        }
    }
</script>

<style scoped>
    .indexOnlyImg img{
        width: 49.5%;
        padding-bottom: 0.03rem;
    }
</style>
