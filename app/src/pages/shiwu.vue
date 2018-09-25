<template>
    <div class="shiWu">
        <header-h></header-h>
        <section-s class="section"></section-s>
    </div>
</template>

<script>
import headerH from "../components/shiWu/header"
import sectionS from "../components/shiWu/section"
export default {
    name:"shiWu",
    components:{
        headerH,
        sectionS
    }
}
</script>

<style scoped>
.shiWu{
    width:100%;
    height:100%;
    display: flex;
    flex-direction:column;
    font-size: 0.12rem;
}
.section{
    flex:1;
    overflow-x:scroll;
}
</style>
