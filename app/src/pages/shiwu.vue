<template>
    <div class="shiwu">
        <header-h></header-h>
        <section-s class="section"></section-s>
    </div>
</template>

<script>
import headerH from "../components/shiwu/header"
import sectionS from "../components/shiwu/section"
export default {
    name:"shiwu",
    components:{
        headerH,
        sectionS
    }
}
</script>

<style scoped>
.shiwu{
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
