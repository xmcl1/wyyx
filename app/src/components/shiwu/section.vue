<template>
    <div class="sectionInner">
        <div class="slideOne">
            <slide-one></slide-one>
        </div>
        <div class="slideTwo">
            <slide-two></slide-two>
            <slide-two></slide-two>
            <slide-two></slide-two>
            <slide-two></slide-two>
            <slide-two></slide-two>
            <slide-two></slide-two>
            <slide-two></slide-two>
        </div>
    </div>
</template>

<script>
import slideOne from './section/slideOne.vue'
import slideTwo from './section/slideTwo.vue'
export default {
    name:'filename',
    components:{
        slideOne,
        slideTwo
    }
}

</script>
<style scoped>
.sectionInner{
    background:#fff;
}
.slideOne{
    width:100%;
    padding: .15rem 0;
}
.slideTwo{
    margin:.15rem 0;
    display: flex;
    overflow-y: scroll;
    border-bottom: .11rem solid #f4f4f4;
}
</style>