<template>
  <!--公共头部-->

  <!--中间主体-->
  <div class="contentS">
    <!--轮播图-->
    <swiper :options="swiperOption">
      <swiper-slide><img src="../assets/img/img3/special_banner1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/img/img3/special_banner2.jpg"></swiper-slide>
      <!--分页器-->
      <div class="swiper-pagination" slot="pagination">
        <span></span>
        <span></span>
      </div>
    </swiper>

    <!--样品展示索引图-->
    <div class="showBox">
      <a href="">
        <img src="../assets/img/img3/spec_show1.png" alt="">
        <span>日本馆</span>
      </a>
      <a href="">
        <img src="../assets/img/img3/spec_show2.png" alt="">
        <span>韩国馆</span>
      </a>
      <a href="">
        <img src="../assets/img/img3/spec_show3.png" alt="">
        <span>东南亚馆</span>
      </a>
      <a href="">
        <img src="../assets/img/img3/spec_show4.png" alt="">
        <span>欧美馆</span>
      </a>
      <a href="">
        <img src="../assets/img/img3/spec_show5.png" alt="">
        <span>澳新馆</span>
      </a>
      <a href="">
        <img src="../assets/img/img3/spec_show6.png" alt="">
        <span>智造馆</span>
      </a>
      <a href="">
        <img src="../assets/img/img3/spec_show7.png" alt="">
        <span>春风馆</span>
      </a>
      <a href="">
        <img src="../assets/img/img3/spec_show8.png" alt="">
        <span>未央馆</span>
      </a>
      <a href="">
        <img src="../assets/img/img3/spec_show10.png" alt="">
        <span>Yessing馆</span>
      </a>
      <a href="">
        <img src="../assets/img/img3/special_show9.png" alt="">
        <span>严选推荐馆</span>
      </a>
    </div>

    <!--精选-->
    <div class="selectContent">

      <!--综合&价格&筛选-->
      <div class="selectBox">
        <div class="selectTab">
          <a href="#" class="a1">
            综合
          </a>
          <a href="#" class="a2">
            价格
            <i class="iconfont icon-shang"></i>
            <i class="iconfont icon-xia"></i>
          </a>
          <a href="#" class="a2">
            上新
            <i class="iconfont icon-shang"></i>
            <i class="iconfont icon-xia"></i>
          </a>
          <a href="#" class="a3">
            筛选
            <i class="iconfont icon-shaixuan"></i>
          </a>

        </div>

        <div class="productBox">
          <div class="recBox2">
            <p class="tip_box">
              <span>日本馆</span>
              <span>日本制造家居好物</span>
            </p>
            <wyyx-special-pros></wyyx-special-pros>
            <wyyx-special-pros></wyyx-special-pros>
            <wyyx-special-pros></wyyx-special-pros>
            <wyyx-special-pros></wyyx-special-pros>
            <wyyx-special-pros></wyyx-special-pros>
            <wyyx-special-pros></wyyx-special-pros>
            <wyyx-special-pros></wyyx-special-pros>
            <wyyx-special-pros></wyyx-special-pros>
          </div>
          <div class="recBox2" style="display: none;">
            <div class="product">
              <div class="proTop">
                <img src="../assets/img/img3/spec_one.png" alt="">
                <p>一缕霞光杯中留，缥缈如烟似旧人</p>
              </div>
              <div class="proBottom">
                <p>2只装 日本制造 渐变色凉水杯</p>
                <p>￥189</p>
              </div>
            </div>
            <div class="product">
              <div class="proTop">
                <img src="../assets/img/img3/new_pro6.png" alt="">
                <p>一缕霞光杯中留，缥缈如烟似旧人</p>
              </div>
              <div class="proBottom">
                <p>2只装 日本制造 渐变色凉水杯</p>
                <p>￥189</p>
              </div>
            </div>
            <div class="product">
              <div class="proTop">
                <img src="../assets/img/img3/new_pro5.png" alt="">
                <p>一缕霞光杯中留，缥缈如烟似旧人</p>
              </div>
              <div class="proBottom">
                <p>2只装 日本制造 渐变色凉水杯</p>
                <p>￥189</p>
              </div>
            </div>
            <div class="product">
              <div class="proTop">
                <img src="../assets/img/img3/new_pro4.png" alt="">
                <p>一缕霞光杯中留，缥缈如烟似旧人</p>
              </div>
              <div class="proBottom">
                <p>2只装 日本制造 渐变色凉水杯</p>
                <p>￥189</p>
              </div>
            </div>
          </div>
          <div class="recBox2" style="display: none;">
            <div class="product">
              <div class="proTop">
                <img src="../assets/img/img3/spec_one.png" alt="">
                <p>一缕霞光杯中留，缥缈如烟似旧人</p>
              </div>
              <div class="proBottom">
                <p>2只装 日本制造 渐变色凉水杯</p>
                <p>￥189</p>
              </div>
            </div>
            <div class="product">
              <div class="proTop">
                <img src="../assets/img/img3/new_pro6.png" alt="">
                <p>一缕霞光杯中留，缥缈如烟似旧人</p>
              </div>
              <div class="proBottom">
                <p>2只装 日本制造 渐变色凉水杯</p>
                <p>￥189</p>
              </div>
            </div>
            <div class="product">
              <div class="proTop">
                <img src="../assets/img/img3/new_pro5.png" alt="">
                <p>一缕霞光杯中留，缥缈如烟似旧人</p>
              </div>
              <div class="proBottom">
                <p>2只装 日本制造 渐变色凉水杯</p>
                <p>￥189</p>
              </div>
            </div>
            <div class="product">
              <div class="proTop">
                <img src="../assets/img/img3/new_pro4.png" alt="">
                <p>一缕霞光杯中留，缥缈如烟似旧人</p>
              </div>
              <div class="proBottom">
                <p>2只装 日本制造 渐变色凉水杯</p>
                <p>￥189</p>
              </div>
            </div>
          </div>
          <div class="shuaixuan" style="display: none">
            <div class="wrapper">
              <div class="price">
                <p>价格区间</p>
                <p>
                  <input type="text" placeholder="最低价">
                  <span>一</span>
                  <input type="text" placeholder="最高价">
                </p>
              </div>

              <div class="sort">
                <div class="two">
                  <span>分类</span>
                  <span>全部</span>
                </div>
                <div class="sortBox">
                  <a href="">居家</a>
                  <a href="">餐厨</a>
                  <a href="">鞋包配饰</a>
                  <a href="">婴童</a>
                  <a href="">服装</a>
                  <a href="">饮食</a>
                  <a href="">洗护</a>
                  <a href="">文体</a>
                  <a href="">特色区</a>
                </div>
              </div>

              <div class=" sort manufacture">
                <div class="two">
                  <span>制造商</span>
                  <span>全部</span>
                </div>
                <div class="sortBox manufactureBox">
                  <a href="">CK制造商</a>
                  <a href="">海外制造商</a>
                  <a href="">MK制造商</a>
                  <a href="">法国Jacadi制造商</a>
                  <a href="">日本Francfranc制造商</a>
                  <a href="">MUJI制造商</a>
                </div>
              </div>

              <div class="sort">
                <div class="two">
                  <span style="background: none; color: #464646;">配送地区</span>
                </div>
                <div class="sortBox">
                  <a href="">西安</a>
                </div>
              </div>

              <div class="wrapper_footer">
                <a href="">重置</a>
                <a href="">确定</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!--公共底部-->
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper"
  import WyyxSpecialPros from "../components/special/wyyxSpecialPros";
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
        WyyxSpecialPros,
        swiper,
        swiperSlide
      }
    }
</script>

<style>
  @import "../assets/icon/font/iconfont.css";
  /*公共样式*/
  body{
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    background: #f4f4f4;
    color: #333333;
    /*overflow-y: hidden;*/
  }
  img{
    display: block;
    border: none;
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

  /*样品展示索引*/
  .showBox{
    width: 100%;
    background: #ffffff;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-justify-content: space-around;
  }
  .showBox a{
    width: 20%;
    text-align: center;
    padding-bottom: 0.16rem;
  }
  .showBox a img{
    width: 0.37rem;
    height: 0.37rem;
    margin: 0.17rem auto;
  }
  .showBox a span{
    display: block;
    color: #333333;
  }

  /*精选*/
  .selectContent{
    width: 100%;
    box-sizing: border-box;
    background: #ffffff;
    margin-top: 0.11rem;
  }
  .selectContent .selectBox{

  }
  .selectBox .selectTab{
    width: 100%;
    height: 0.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
  }
  .selectTab a{
    color: #333333;
    font-size: 0.15rem;
    display: block;
    position: relative;
  }
  .selectTab i{
    color: #d2d2d2;
  }
  .selectTab .a1{
    color: #a53533;
    font-size: 0.16rem;
  }
  .a2 .icon-shang{
    position: absolute;
    top: 0.01rem;
    left: 0.34rem;
    font-size: 0.14rem;
  }
  .a2 .icon-xia{
    position: absolute;
    top: 0.09rem;
    left: 0.34rem;
    font-size: 0.14rem;
  }
  .a3 .icon-shaixuan{
    position: absolute;
    left:0.34rem;
    top: 0.02rem;
  }
  .selectBox .productBox{
    padding: 0 0.1rem;
  }

  .selectBox .tip_box{
    width: 100%;
    background: #ffffff;
    padding: 0.17rem 0 0.08rem;
    text-align: center;
  }
  .tip_box span:first-child{
    font-size: 0.15rem;
    color: #111111;
    display: block;
    line-height: 0.25rem;
  }
  .tip_box span:last-child{
    font-size: 0.13rem;
    color: #6b6b6b;
  }
  .recBox2{
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
  }


  /*筛选固定定位*/
  .shuaixuan{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.4);
    z-index: 99;
  }
  .wrapper{
    width: 80%;
    height: 100%;
    background: #ffffff;
    font-size: 0.15rem;
    color: #464646;
    position: absolute;
    right: 0;
    top: 0;
  }
  .wrapper .price,.wrapper .sort{
    margin: 0 0.11rem;
  }
  .wrapper a{
    margin-bottom: 0.12rem;
  }
  .price p:first-child{
    line-height: 0.5rem;
  }
  .price p:last-child{
    margin-bottom: 0.18rem;
  }
  .price span{
    margin:0 0.14rem;
    font-size: 0.13rem;
    color: #cecece;
  }
  .price input{
    text-align: center;
    line-height: 0.29rem;
    width: 1.1rem;
    height: 0.29rem;
    border: 1px solid #cecece;
    border-radius:4px;
    outline: none;
  }
  input::-webkit-input-placeholder {
    color: #cccccc;
  }
  .sort .two{
    display: -webkit-flex;
    height:0.5rem;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
  }
  .sort .two span:last-child{
    padding-right: 0.18rem;
    color: #a2a2a2;
    background: url("../assets/img/img3/bot.png") no-repeat right center;
    background-size: 0.1rem 0.08rem;
  }
  .sortBox{
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    -webkit-justify-content: space-between;
  }
  .sortBox a{
    width: 30.3%;
    height: 0.28rem;
    line-height: 0.28rem;
    text-align: center;
    color: #464646;
    font-size: 0.15rem;
    border: 1px solid #cecece;
    border-radius:4px;
  }
  .manufactureBox a{
    width: 48%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .wrapper_footer{
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    height: 0.54rem;
    border-top: 1px solid #e7e7e7;
    margin-top: 0.68rem;
  }
  .wrapper_footer a{
    width: 50%;
    height: 100%;
    color: #464646;
    margin-bottom: 0;
    text-align: center;
    line-height: 0.54rem;
    font-size: 0.14rem;
  }
  .wrapper_footer a:last-child{
    background: #b4272d;
    color: #ffffff;
  }

</style>
