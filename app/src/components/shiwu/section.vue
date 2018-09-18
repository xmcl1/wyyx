<template>
    <div class="sectionInner">
        <div class="slideOne">
            <slide-one></slide-one>
            <div class="slideTwo">
                <div class="slide1">
                    <img src="../../assets/img/img1/slide5.jpg"/>
                    <span>严选推荐</span>
                </div>
                <div class="slide1 slide2">
                    <img src="../../assets/img/img1/slide6.jpg"/>
                    <span>丁磊的好货</span>
                </div>
                <div class="slide1 slide3">
                    <img src="../../assets/img/img1/slide7.jpg"/>
                    <span>挑款师推荐</span>
                </div>
                <div class="slide1">
                    <img src="../../assets/img/img1/slide5.jpg"/>
                    <span>严选HOME</span>
                </div>
                <div class="slide1 slide2">
                    <img src="../../assets/img/img1/slide6.jpg"/>
                    <span>丁磊的好货</span>
                </div>
                <div class="slide1 slide3">
                    <img src="../../assets/img/img1/slide7.jpg"/>
                    <span>挑款师推荐</span>
                </div>
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
        <div class="YXZhenPin">
            <h3>严选甄品</h3>
            <y-x-zhen-pin></y-x-zhen-pin>
        </div>
        <div class="YXLook">
            <y-x-look></y-x-look>
        </div>
        <div class="more">
            <h3>
                <span></span>
                <span>更对精彩</span>
                <span></span>
            </h3>
            <more-one></more-one>
            <more-one></more-one>
            <more-one></more-one>
            <more-one></more-one>
            <more-one></more-one>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

import slideOne from './section/slideOne.vue'
import recommandForYou from './section/recommandForYou.vue'
import YXZhenPin from './section/YXZhenPin.vue'
import clockCon from './section/clockCon.vue'
import YXLook from './section/YXLook.vue'
import moreOne from './section/moreOne.vue'
export default {
    name:'filename',
    components:{
        swiper,
        swiperSlide,
        slideOne,
        recommandForYou,
        YXZhenPin,
        clockCon,
        YXLook,
        moreOne
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
    margin-top:.3rem;
    display: flex;
    overflow-y: scroll;
    padding:0 .08rem;
}
.slideTwo img{
    width:.86rem;
    height:.86rem;
}
.slideTwo>.slide1{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: .12rem;
}
.slideTwo>.slide1:last-of-type{
    padding-right: .2rem;
}
.slideTwo>.slide1>span{
    margin:.11rem 0;
    color:#787878;
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
.YXZhenPin{
    padding:0 .15rem;
}
.YXZhenPin>h3{
    text-align:center;
    color:#3d3d3d;
    padding:.22rem 0;
}
.more{
    width:100%;
    padding:0 .16rem;
    box-sizing: border-box;
}
.more h3{
    font-size:.14rem;
    color:#383838;
    display: flex;
    justify-content: center;
    padding:.3rem 0;
}
.more h3>span:nth-of-type(1){
    width:100%;
    height:1px;
    background:#f0f0f0;
    margin-top:.08rem;
}
.more h3>span:nth-of-type(2){
    margin:0 .13rem;
    white-space: nowrap;
}
.more h3>span:nth-of-type(3){
    width:100%;
    height:1px;
    background:#f0f0f0;
    margin-top:.08rem;
}
</style>