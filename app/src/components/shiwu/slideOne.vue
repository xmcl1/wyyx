<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide><img src="../../assets/img/img1/slide1.jpg"/></swiper-slide>
        <swiper-slide><img src="../../assets/img/img1/slide2.jpg"/></swiper-slide>
        <swiper-slide><img src="../../assets/img/img1/slide3.jpg"/></swiper-slide>
        <swiper-slide><img src="../../assets/img/img1/slide4.jpg"/></swiper-slide>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "test",
  data() {
    return {
      //msg: 'Welcome to Your e.js App',
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

<style scoped>
img{
    width:3.35rem;
    height:1.94rem;
    border-radius:.08rem;
}
.slideTop{
    padding:.13rem 0;
}
.swiper-slide{
    display: flex;
    justify-content: center;
}
</style>
