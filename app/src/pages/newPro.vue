<template>

  <div class="newPro">
    <!--中间主体-->
    <div class="content" v-for="(con,nIndex) in newProInfo" :key="nIndex" :con="con">
      <!--轮播图-->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(imgs,i) in con.bannerN" :key="i"><img :src="imgs"></swiper-slide>
        <!--分页器-->
        <div class="swiper-pagination" slot="pagination">
          <span></span>
          <span></span>
        </div>
      </swiper>

      <!--限时-->
      <div class="limitContent">
        <p class="title">{{con.limitContent.title}}</p>
        <wyyx-new-pro-limit-box v-for="(lb,m) in con.limitContent.limitBox" :key="m" :lb="lb"></wyyx-new-pro-limit-box>
      </div>

      <!--推荐关注-->
      <div class="recommendContent">
        <p class="title">{{con.recommendContent.title}}</p>
        <wyyx-new-pro-rec-box-one :bo="con.recommendContent.recBox1"></wyyx-new-pro-rec-box-one>

        <div class="recBox2">
          <wyyx-new-pro-rec-box-pros v-for="(bp,pid) in con.recommendContent.recBox2" :key="pid" :bp="bp"></wyyx-new-pro-rec-box-pros>
        </div>
      </div>

      <!--精选-->
      <div class="selectContent">
        <p class="title">{{con.selectContent.title1}}</p>

        <!--综合&价格&筛选-->
        <div class="selectBox">
          <div class="selectTab" id="selectTab">
            <a href="javascript:;" class="a1" :class="{active:istrue==0}" @mouseover="istrue=0" @click="show(0)">
              {{con.selectContent.selectTab.a1}}
            </a>
            <a href="javascript:;" class="a2">
              <span @click="show(1)" :class="{active:istrue==1}"  @mouseover="istrue=1">{{con.selectContent.selectTab.a2}}</span>
              <i class="iconfont icon-shang" @click="show(1)" :class="{active:istrue==1}"  @mouseover="istrue=1"></i>
              <i class="iconfont icon-xia" @click="show(2)" :class="{active:istrue==2}"  @mouseover="istrue=2"></i>
            </a>
            <a href="javascript:;" class="a3" @click="show(3)" :class="{active:istrue==3}"  @mouseover="istrue=3">
              {{con.selectContent.selectTab.a3}}
              <i class="iconfont icon-shaixuan"></i>
            </a>

          </div>
          <div class="newPro">{{con.selectContent.title2}}</div>

          <div class="productBox">
            <div class="recBox2" v-for="(proB,bid) in con.selectContent.recBox2Num" :key="bid" :proB="proB" v-show="btn==proB.flag">
              <wyyx-new-pro-rec-box-pros-t v-for="(pros,pid) in proB.proDetail" :key="pid" :pros="pros"></wyyx-new-pro-rec-box-pros-t>
            </div>

            <!--筛选-->
            <wyyx-new-pro-shai-xuan :sx="con.selectContent.shaixuan" v-show="btn==3"></wyyx-new-pro-shai-xuan>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper"
  import WyyxNewProLimitBox from "../components/newPro/wyyxNewProLimitBox";
  import WyyxNewProRecBoxPros from "../components/newPro/wyyxNewProRecBoxPros";
  import WyyxNewProRecBoxOne from "../components/newPro/wyyxNewProRecBoxOne";
  import WyyxNewProShaiXuan from "../components/newPro/wyyxNewProShaiXuan";
  import WyyxNewProRecBoxProsT from "../components/newPro/wyyxNewProRecBoxProsT";
  import {indexServices1} from "../apis/wyyxServer"
  import $ from 'jquery'
    export default {
      name: "newPro",
      data() {
        return {
          istrue:0,
          btn:0,
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
          "newProInfo":[]
        };
      },
      methods:{
        result() {
          indexServices1.indexInfoByUserId1((data) => {
            this.newProInfo = data;
            console.log(this.newProInfo)
          })
        },
        show(id){
          this.btn = id
        }
      },
      components: {
        WyyxNewProRecBoxProsT,
        WyyxNewProShaiXuan,
        WyyxNewProRecBoxOne,
        WyyxNewProRecBoxPros,
        WyyxNewProLimitBox,
        swiper,
        swiperSlide
      },
      created(){
          this.result()
          $(function () {
            // selectBox
          let oTop = $(".selectTab")[0].offsetTop+$(".selectBox")[0].offsetHeight;
          let sTop = 0;
          $(window).scroll(function(){
            // console.log( $(".selectTab").offset().top)
            sTop = $(this).scrollTop();

            if(sTop >= oTop){
              $(".selectTab").css({"position":"fixed","top":"0"});
            }else{
              $(".selectTab").css({"position":"relative","top":"0"});
            }
          });
        })
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

  /*限时*/
  .limitContent{
    width: 100%;
    margin-top: 0.11rem;
    background: #ffffff;
  }
  .limitContent .title{
    height: 0.58rem;
    font-size: 0.15rem;
    color: #1d1d1d;
    line-height: 0.58rem;
    text-align: center;
    /*font-weight: bold;*/
  }

  /*推荐关注*/
  .recommendContent{
    width: 100%;
    padding: 0 0.1rem;
    box-sizing: border-box;
    background: #ffffff;
    margin-top: 0.11rem;
  }
  .recommendContent .title{
    height: 0.58rem;
    font-size: 0.15rem;
    color: #1d1d1d;
    line-height: 0.58rem;
    text-align: center;
  }
  .recBox2{
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
  }
  .recBox2 .product{
    width: 48.5%;
    margin-top: 0.15rem;
    box-sizing: border-box;
  }
  .recBox2 .product:last-child, .recBox2 .product:nth-last-child(2){
    margin-bottom: 0.15rem;
  }
  .recBox2 .product:nth-child(2n+1){
    margin-right: 1.5%;
  }
  .recBox2 .product:nth-child(2n){
    margin-left: 1.5%;
  }
  .recBox2 .product .proTop{
    background: #f4f4f4;
  }
  .recBox2 .product .proTop p{
    background: #f0ece1;
    height: 0.35rem;
    line-height: 0.35rem;
    letter-spacing: 1px;
    padding: 0 0.05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #a49983;
  }
  .recBox2 .product .proBottom p:first-child{
    line-height: 0.32rem;
    letter-spacing: 1px;
    padding: 0 0.05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .recBox2 .product .proBottom p:last-child{
    color: #b8303a;
    font-weight: bold;
  }

  /*精选*/
  .selectContent{
    width: 100%;
    box-sizing: border-box;
    background: #ffffff;
    margin-top: 0.11rem;
  }
  .selectContent .title{
    height: 0.58rem;
    font-size: 0.15rem;
    color: #1d1d1d;
    line-height: 0.58rem;
    text-align: center;
  }
  .selectContent .selectBox{

  }
  .selectBox .selectTab{
    background: #ffffff;
    width: 100%;
    height: 0.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
    position: relative;
    top:0;
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
  .selectTab .active{
    color: #a53533;
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
  .selectBox .newPro{
    padding: 0 0.1rem;
    height: 0.48rem;
    line-height: 0.48rem;
    text-indent: 0.1rem;
    font-size: 0.13rem;
    background: url("../assets/img/img3/red_line.png") no-repeat 0.1rem center;
    background-size: 0.05rem 0.18rem;
  }

  .selectBox .productBox{
    padding: 0 0.1rem;
  }
  .productBox .recBox2 .product:first-child,.productBox .recBox2 .product:nth-child(2){
    margin-top: 0;
  }


</style>
