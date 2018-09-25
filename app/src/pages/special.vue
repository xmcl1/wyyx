<template>
  <!--公共头部-->

 <div class="special">
    <!--中间主体-->
  <div class="contentS" v-for="(con,nIndex) in newProInfo" :key="nIndex" :con="con">
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
          <a href="#" class="a1" :class="{active:istrue==0}" @mouseover="istrue=0" @click="show(0)">
            {{con.selectContent.selectTab.a1}}
          </a>
          <a href="#" class="a2">
            <span @click="show(1)" :class="{active:istrue==1 || istrue==2}"  @mouseover="istrue=1 || istrue==2">{{con.selectContent.selectTab.a2}}</span>
            <i class="iconfont icon-shang" @click="show(1)" :class="{active:istrue==1}"  @mouseover="istrue=1"></i>
            <i class="iconfont icon-xia" @click="show(2)" :class="{active:istrue==2}"  @mouseover="istrue=2"></i>
          </a>
          <!--<a href="#" class="a2">-->
             <!--<span @click="show(1)" :class="{active:istrue==1 || istrue==2}"  @mouseover="istrue=1 || istrue==2">上新</span>-->
            <!--<i class="iconfont icon-shang" @click="show(1)" :class="{active:istrue==1}"  @mouseover="istrue=1"></i>-->
            <!--<i class="iconfont icon-xia" @click="show(2)" :class="{active:istrue==2}"  @mouseover="istrue=2"></i>-->
          <!--</a>-->
          <a href="javascript:;" class="a3" @click="show(3)" :class="{active:istrue==3}"  @mouseover="istrue=3">
            {{con.selectContent.selectTab.a3}}
            <i class="iconfont icon-shaixuan" @click="show(3)" :class="{active:istrue==3}"  @mouseover="istrue=3"></i>
          </a>

        </div>

        <div class="productBox">
          <div class="recBox2" v-for="(proB,bid) in con.selectContent.recBox2Num" :key="bid" :proB="proB" v-show="btn==proB.flag">
            <p class="tip_box">
              <span>日本馆</span>
              <span>日本制造家居好物</span>
            </p>
            <wyyx-special-rec-box-pros-t v-for="(pros,pid) in proB.proDetail" :key="pid" :pros="pros"></wyyx-special-rec-box-pros-t>
          </div>

          <wyyx-special-shaixuan :sx="con.selectContent.shaixuan" v-show="btn==3" @backLayout="sxLayout"></wyyx-special-shaixuan>
        </div>
      </div>
    </div>

  </div>
 </div>

  <!--公共底部-->
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper"
  import WyyxSpecialShaixuan from "../components/special/wyyxSpecialShaixuan";
  import WyyxSpecialRecBoxProsT from "../components/special/wyyxSpecialRecBoxProsT";
  import {indexServices1} from "../apis/wyyxServer"
  import $ from 'jquery'
    export default {
      name: "special",
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
      components: {
        WyyxSpecialRecBoxProsT,
        WyyxSpecialShaixuan,
        swiper,
        swiperSlide
      },
      methods:{
        result() {
          indexServices1.indexInfoByUserId1((data) => {
            this.newProInfo = data;
            // console.log(this.newProInfo)
          })
        },
        show(id){
          this.btn = id
        },
        sxLayout(){
          document.getElementsByClassName('productBox')[0].children[2].style.display = 'flex'
          // document.getElementsByClassName('productBox')[0].children[2].style.flexWrap='wrap'
        }
      },
      created(){
        this.result()
        $(function () {
          // selectBox
          let oTop = $(".selectTab")[0].offsetTop-$(".selectTab")[0].offsetHeight;
          let sTop = 0;
          $(".special").scroll(function(){
            sTop = $(this).scrollTop();
            // console.log(oTop);
            // console.log(sTop);
            if(sTop>= oTop){
              $(".selectTab").css({"position":"fixed","top":"0.84rem"});
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
  .special{
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    background: #f4f4f4;
    color: #333333;
    font-size: .12rem;
    flex: 1;
    overflow-y: scroll;
  }
  .special img{
    display: block;
    border: none;
    width: 100%;
  }
  /*轮播图样式*/
  .special .swiper-container{
    width: 100%;
    height: 2.0rem;
  }
  .special .swiper-container .swiper-pagination{
    width:182%;
    height: 0.18rem;
  }
  .special .swiper-pagination-bullet {
    width: 0.09rem;
    height: 0.13rem;
    background: url("../assets/img/img3/all_banner_indicator_white_ic.png") no-repeat;
    background-size: 100% 100%;
    opacity: 1;
  }
  .special .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
    margin: 0 3px;
  }
  .special .swiper-pagination-bullet-active {
    width: 0.1rem;
    height: 0.13rem;
    background: url("../assets/img/img3/all_banner_indicator_red_ic.png") no-repeat;
    background-size: 90% 100%;
  }

  /*样品展示索引*/
  .special .showBox{
    width: 100%;
    background: #ffffff;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-justify-content: space-around;
  }
  .special .showBox a{
    width: 20%;
    text-align: center;
    padding-bottom: 0.16rem;
  }
  .special .showBox a img{
    width: 0.37rem;
    height: 0.37rem;
    margin: 0.17rem auto;
  }
  .special .showBox a span{
    display: block;
    color: #333333;
  }

  /*精选*/
  .special .selectContent{
    width: 100%;
    box-sizing: border-box;
    background: #ffffff;
    margin-top: 0.11rem;
  }
  .selectContent .selectBox{

  }
  .special .selectBox .selectTab{
    width: 100%;
    height: 0.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
    background: #ffffff;
  }
  .special .selectTab a{
    color: #333333;
    font-size: 0.15rem;
    display: block;
    position: relative;
  }
  .special .selectTab .active{
    color: #a53533;
  }
  .special .selectTab i{
    color: #d2d2d2;
  }
 .special .selectTab .a1{
    font-size: 0.16rem;
  }
  .special .a2 .icon-shang{
    position: absolute;
    top: 0.01rem;
    left: 0.34rem;
    font-size: 0.14rem;
  }
  .special .a2 .icon-xia{
    position: absolute;
    top: 0.09rem;
    left: 0.34rem;
    font-size: 0.14rem;
  }
  .special .a3 .icon-shaixuan{
    position: absolute;
    left:0.34rem;
    top: 0.02rem;
  }
  .special .selectBox .productBox{
    padding: 0 0.1rem;
  }

 .special .selectBox .tip_box{
    width: 100%;
    background: #ffffff;
    padding: 0.17rem 0 0.08rem;
    text-align: center;
  }
  .special .tip_box span:first-child{
    font-size: 0.15rem;
    color: #111111;
    display: block;
    line-height: 0.25rem;
  }
  .special .tip_box span:last-child{
    font-size: 0.13rem;
    color: #6b6b6b;
  }
  .special .recBox2{
    display: -webkit-flex;
    flex-wrap: wrap;
  }

</style>
