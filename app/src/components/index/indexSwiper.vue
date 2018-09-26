<template>
    <div class="swiperIndex" id="swiperIndex" v-if="this.indexbanner">
        <!-- {{ indexbanner.banner }} -->
        <!--轮播图-->
        <swiper :options="swiperOption">
        <swiper-slide v-for="(val,index) in indexbanner.banner" :key="index"><img :src="val"/></swiper-slide>
        <!-- <swiper-slide><img src="../../assets/img/img2/index-banner2.jpg"></swiper-slide>
        <swiper-slide><img src="../../assets/img/img2/index-banner3.jpg"></swiper-slide>
        <swiper-slide><img src="../../assets/img/img2/index-banner4.jpg"></swiper-slide>
        <swiper-slide><img src="../../assets/img/img2/index-banner5.jpg"></swiper-slide>
        <swiper-slide><img src="../../assets/img/img2/index-banner6.jpg"></swiper-slide>
        <swiper-slide><img src="../../assets/img/img2/index-banner7.jpg"></swiper-slide>
        <swiper-slide><img src="../../assets/img/img2/index-banner8.jpg"></swiper-slide> -->
        <!--分页器-->
        <!-- <div class="swiper-pagination" slot="pagination">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div> -->
        </swiper>
    </div>
</template>

<script>
 import { swiper, swiperSlide } from "vue-awesome-swiper"
    export default {
      name: "special",
      props:["indexbanner"],
      data() {
        return {
           swiperOption: {
            loop: true,
            effect: 'slide',
            speed: 600,
            autoplay: {
              delay: 3000,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            }
          },
        };
      },
      components: {
        swiper,
        swiperSlide
      },
    }

</script>

<style scoped>
    #swiperIndex{
        width: 100%;
        height: 1.84rem;
    }
    #swiperIndex img{
        width: 100%;
        height: 1.84rem;
    }
    #swiperIndex swiper-slide{
        height: 1.84rem;
        width: 100%;
    }
    #swiperIndex .swiper-container{
    width: 100%;
    height: 2.0rem;
    }
    #swiperIndex .swiper-container .swiper-pagination{
        width:100%;
        height: 0.18rem;
        display: flex;
        justify-content: flex-end;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets{
        bottom: 20px;
    }
      .swiper-pagination .swiper-pagination-bullet {
        width: 0.09rem;
        height: 0.13rem;
        background: url("../../assets/img/img3/all_banner_indicator_white_ic.png") no-repeat ;
        background-size: 100% 100%;
        opacity: 1;
    }
     .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
        margin: 0 3px; 
    }
     .swiper-pagination .swiper-pagination-bullet-active {
        width: 0.1rem;
        height: 0.13rem;
        background: url("../../assets/img/img3/all_banner_indicator_red_ic.png") no-repeat;
        background-size: 90% 100%;
    }
</style>
