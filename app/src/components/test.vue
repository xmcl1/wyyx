<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>slide1</swiper-slide>
        <swiper-slide>slide2</swiper-slide>
        <swiper-slide>slide3</swiper-slide>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "",
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style>
</style>
