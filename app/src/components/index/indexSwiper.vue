<template>
    <div class="swiper" v-if="this.indexbanner">
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
        <div class="swiper-pagination" slot="pagination">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
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
          }
        };
      },
      components: {
        swiper,
        swiperSlide
      },
    }

</script>

<style scoped>
    .swiper{
        width: 100%;
        height: 1.84rem;
        background: #ac0;
    }
    .swiper img{
        width: 100%;
        height: 1.84rem;
    }
    .swiper swiper-slide{
        height: 1.84rem;
        width: 100%;
    }
</style>
