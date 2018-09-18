<template>
    <div class="sectionInner">
        <div class="slideOne">
            <slide-one></slide-one>
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
        <div class="recommandForYou">
            <h3>为你推荐</h3>
            <recommand-for-you></recommand-for-you>
            <recommand-for-you></recommand-for-you>
        </div>
        <div class="clock">
            <h3>十点一刻</h3>
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide><clock-con></clock-con></swiper-slide>
                <swiper-slide><clock-con></clock-con></swiper-slide>
                <swiper-slide><clock-con></clock-con></swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

import slideOne from './section/slideOne.vue'
import slideTwo from './section/slideTwo.vue'
import recommandForYou from './section/recommandForYou.vue'
import clockCon from './section/clockCon.vue'
export default {
    name:'filename',
    components:{
        slideOne,
        slideTwo,
        recommandForYou,
        clockCon,
        swiper,
        swiperSlide
    },
    data() {
    return {
      swiperOption: {
        autoplay: false,
      }
    };
  }
}

</script>
<style scoped>
.sectionInner{
    background:#fff;
}
.sectionInner>div{
    border-bottom: .11rem solid #f4f4f4;
}
.slideOne{
    width:100%;
    padding: .15rem 0;
}
.slideTwo{
    margin-top:.15rem;
    display: flex;
    overflow-y: scroll;
}
.recommandForYou{
    padding:0 .15rem;
}
.recommandForYou>h3{
    text-align:center;
    color:#3d3d3d;
    padding:.22rem 0;
}
.clock{
    text-align:center;
    padding-bottom:.34rem;
}
.clock>h3{
    line-height:.62rem;
}
/* .clockCon{
    display: flex;
} */
</style>