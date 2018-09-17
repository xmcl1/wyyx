<template>
    <div class="shiwu">
        <header-h></header-h>
        <div class="slideTop">
            <slide-one></slide-one>
        </div>
    </div>
</template>

<script>
import headerH from "../components/shiwu/header"
import slideOne from "../components/shiwu/slideOne"
export default {
    name:"shiwu",
    components:{
        headerH,
        slideOne
    }
}
</script>

<style scoped>
.shiwu{
    width:100%;
    height:100%;
}
.slideTop{
    padding:.13rem 0;
}
</style>
