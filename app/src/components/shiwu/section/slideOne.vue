<template>
    <swiper :options="swiperOption" ref="mySwiper"> 
       <swiper-slide v-for="(val,index) in shiWu.slideOneImg"  :key="index">
          <img :src="val" />
       </swiper-slide>  
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "test",
  props:["shiWu"],
  data() {
    return {
      //msg: 'Welcome to Your e.js App',
      swiperOption: {
        autoplay: true,
        loop: true
      },
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
