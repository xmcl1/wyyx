<template>
  <!--公共头部-->

  <!--中间主体-->
  <div class="content">
    <!--轮播图-->
    <swiper :options="swiperOption">
      <swiper-slide><img src="../assets/img/img3/new_banner1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/img/img3/new_banner2.jpg"></swiper-slide>
      <!--分页器-->
      <div class="swiper-pagination" slot="pagination">
        <span></span>
        <span></span>
      </div>
    </swiper>

    <!--限时-->
    <div class="limitContent">
        <p class="title">限时尝鲜</p>
        <div class="limitBox">
          <div class="box_left"><img src="../assets/img/img3/new_pro1.png"></div>
          <div class="box_right">
            <p class="firstP">小面包幼儿学步车</p>
            <p class="secondP">稳定学步，不易摔倒</p>
            <div class="thirdTxt">
              <p>
                <span>￥95.5</span>
                <span>今日价</span>
              </p>
              <p>
                <span>￥96</span>
                <span>明日价</span>
              </p>
              <p>
                <span>￥99</span>
                <span>原价</span>
              </p>
            </div>
            <a href="javascript:;">立即抢购</a>
          </div>
        </div>
        <div class="limitBox">
          <div class="box_left"><img src="../assets/img/img3/new_pro2.png"></div>
          <div class="box_right">

          </div>
        </div>
    </div>
  </div>

  <!--公共底部-->
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper"
    export default {
      name: "special",
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
      }
    }
</script>

<style>
  /*公共样式*/
  body{
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    background: #f4f4f4;
    color: #333333;
  }
  img{
    width: 100%;
  }
  /*轮播图样式*/
.swiper-container{
  width: 100%;
  height: 2.0rem;
}
  .swiper-container .swiper-pagination{
    width:182%;
    height: 0.18rem;
  }
  .swiper-pagination-bullet {
    width: 0.09rem;
    height: 0.13rem;
    background: url("../assets/img/img3/all_banner_indicator_white_ic.png") no-repeat;
    background-size: 100% 100%;
    opacity: 1;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
    margin: 0 3px;
  }
  .swiper-pagination-bullet-active {
    width: 0.1rem;
    height: 0.13rem;
    background: url("../assets/img/img3/all_banner_indicator_red_ic.png") no-repeat;
    background-size: 90% 100%;
  }

  /*限时*/
  .limitContent{
    width: 100%;
    margin-top: 0.11rem;
    background: #ffffff;
  }
  .limitContent .title{
    height: 0.58rem;
    font-size: 0.14rem;
    color: #1d1d1d;
    line-height: 0.58rem;
    text-align: center;
    font-weight: bold;
  }
  .limitBox{
    display: -webkit-flex;
    border-top: 1px solid #dadada;
  }
  .limitBox:first-child{
    border-top: 2px solid #dadada;
  }
  .limitBox .box_left{
    width: 44%;
  }
  .limitBox .box_right{
    flex: 1;
    padding: 0.22rem 0;
  }

  .box_right .firstP{
    font-size: 0.15rem;
    width: 95%;
    color: #060606;
    line-height: 0.25rem;
  }
  .box_right .secondP{
    width: 95%;
    color: #767676;
    line-height: 0.21rem;
  }
  .box_right .thirdTxt{
    display: -webkit-flex;
    margin: 0.1rem 0;
  }
  .box_right .thirdTxt p{
    width: 33.3%;
    color: #767676;
    text-align: center;
    background: url("../assets/img/img3/line.png") no-repeat right center;
    background-size: 2px 0.21rem;
  }
  .box_right .thirdTxt p:last-child{
    background: none;
  }
  .box_right .thirdTxt p:first-child{
    text-align: left;
  }
  .box_right .thirdTxt p span{
    display: block;
    line-height: 0.18rem;
  }
  .box_right .thirdTxt p:first-child span:first-child{
    color: #b72b46;
  }
  .box_right .thirdTxt p:first-child span:last-child{
    color: #2f2f2f;
  }
  .box_right .thirdTxt p:nth-child(2) span:first-child{
    text-align: left;
    text-indent: 0.16rem;
  }
  .box_right a{
    display: block;
    width: 1.05rem;
    height: 0.29rem;
    text-align: center;
    line-height: 0.29rem;
    background: #f49119;
    color: #fafff0;
    font-size: 0.13rem;
    letter-spacing: 1px;
    border-radius: 4px;
  }
</style>
