<template>
  <div class="contents">
  <div class="productheader">
    <div>
      <p>
        <a href="#"><img src="../../assets/img/img4/product-zuo.png" alt="" /></a>
      </p>
      <p>
        <a href="#"><img src="../../assets/img/img4/product-home.png" alt="" /></a>
        <a href="#"><img src="../../assets/img/img4/product-fenxiang.png" alt="" /></a>
      </p>
    </div>
    <!--商品的详情-->
      <swiper class="swip" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="../../assets/img/img4/product-xiangqing-0.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/img/img4/product-xiangqing-1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/img/img4/product-xiangqing-2.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/img/img4/product-xiangqing-3.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/img/img4/product-xiangqing-4.jpg" alt=""></swiper-slide>
         <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>

    <div class="miaoshu">
      <div>
        <img src="../../assets/img/img4/product-miaoshu-0.png" alt="" />
        <p>
          <span>北欧花鸟</span>
          <span>自然雀跃</span>
        </p>
      </div>
      <div>
        <img src="../../assets/img/img4/product-miaoshu-1.png" alt="" />
        <p>
          <span>全棉质地</span>
          <span>双享亲肤</span>
        </p>
      </div>
      <div>
        <img src="../../assets/img/img4/product-miaoshu-2.png" alt="" />
        <p>
          <span>独立收纳</span>
          <span>精巧方便</span>
        </p>
      </div>
    </div>
    <!--product-wenjianmiaoshu-->
    <div class="product-wenjianmiaoshu">
      <p>花鸟集4件套</p>
      <p>北欧色彩美学，2种质感，双享体验</p>
      <p>
        <span>￥<em>399</em></span>
        <span>购买最高得39积分</span>
      </p>
      <a href="#">
		<span>
			超级会员价￥<em>379.10</em>
		</span>
        <span>
			立即开通
		</span>
      </a>
    </div>
    <div class="huise"></div>
  </div>
  </div>
</template>

<script>
  import { swiper,swiperSlide } from "vue-awesome-swiper"
    export default {
      name: "product-header",
      data() {
        return {
          "swiperOption": {
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              type:"fraction"
            }
          }
        }
      },
      components: {
        swiper,
        swiperSlide
      }
    }
</script>

<style scoped>
  *{
    font-style: normal!important;
  }
  @import 'swiper/dist/css/swiper.css';
  .swiper-pagination-fraction{
    left: auto;
    right: 0.1rem;
    width: 0.37rem;
    font-size: 0.12rem;
    background: #fff;
    padding: 0.02rem 0.05rem;
    border: 1px solid #a09da3;
  }
  .swiper-pagination-fraction span{
    color: #000 !important;
  }
   .swiper-slide {
      width: 100%;
      height: 3.75rem;
    }
  .swiper-slide > img{
    width: 100%;
    height: 3.75rem;
  }
  *{
    font-size: 0.14rem;
    font-style: normal;
    outline: none;
  }
  .contents{
    overflow-y: scroll;
    height: 100%;
  }
  .productheader{
    box-sizing: border-box;
    position: relative;
  }
  .productheader > div:nth-of-type(1){
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    padding: 0.1rem;
    box-sizing: border-box;
    z-index: 999;
  }
  .productheader > div:nth-of-type(1) > p > a{
    display: inline-block;
    width: 0.18rem;
    height: 0.18rem;
    border-radius: 50%;
    background-color: rgba(0,0,0,.5);
    text-align: center;
    padding: 0.09rem;
  }
  .productheader > div:nth-of-type(1) > p > a > img{
    height: 0.18rem;
  }
  .productheader > div:nth-of-type(1) > p:nth-of-type(2) a{
    margin: 0 0.04rem;
  }
  .productheader > .swip{
    width: 100%;
    height: 3.45rem;
  }
  .productheader > div:nth-of-type(3){
    width: 100%;
    height: 0.62rem;
    box-sizing: border-box;
    background-color: #f9f9f9;
    padding: 0rem 0.15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .productheader > div:nth-of-type(3) > div{
    display: flex;
  }
  .productheader > div:nth-of-type(3) > div > p > span{
    display: block;
  }
  .productheader > div:nth-of-type(3) > div > p{
    padding-left: 0.07rem;
  }
  /*product-wenjianmiaoshu*/
  .product-wenjianmiaoshu{
    width: 100%;
    box-sizing: border-box;
    padding: 0.19rem 0.15rem;
  }
  .product-wenjianmiaoshu > p:nth-of-type(2){
    padding-top: 0.08rem;
    color: #5a5a5a;
  }
  .product-wenjianmiaoshu > p:nth-of-type(3){
    display: flex;
    justify-content: space-between;
    padding-top: 0.12rem;
  }
  .product-wenjianmiaoshu > p:nth-of-type(3) > span:nth-of-type(1),
  .product-wenjianmiaoshu > p:nth-of-type(3) > span:nth-of-type(1) em{
    font-size: 0.18rem;
    color: #990000;
    font-weight: bold;
  }
  .huise{
    width:100%;
    height: 0.12rem;
    background-color: #f4f4f4;
  }
  .product-wenjianmiaoshu > p:nth-of-type(3) > span:nth-of-type(2){
    color: #5a5a5a;
  }
  .product-wenjianmiaoshu > a {
    display:  flex;
    justify-content: space-between;
    margin-top:  0.3rem;
    padding: 0.1rem;
    width: 100%;
    background-color: #f9f6ef;
    box-sizing: border-box;
  }
  .product-wenjianmiaoshu > a  > span{
    position: relative;
    display: inline-block;
  }
  .product-wenjianmiaoshu > a  > span:nth-of-type(1):before{
    content:"";
    display: inline-block;
    width: 0.15rem;
    height: 0.15rem;
    background-image: url(../../assets/img/img4/product-shandian.png);
    background-size: 100%;
    position: relative;
    top: 0.03rem;
    background-repeat: no-repeat;
  }
  .product-wenjianmiaoshu > a  > span:nth-of-type(2):after{
    content:"";
    background-repeat: no-repeat;
    display: inline-block;
    width: 0.08rem;
    height: 0.16rem;
    background-image: url("../../assets/img/img4/product-dayuhao.png");
    background-size: auto 0.16rem ;
    vertical-align: middle;
    padding-bottom: 0.04rem;
  }

</style>
