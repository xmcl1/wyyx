<template>

  <div class="limitTime">
    <!--中间主体-->
    <div class="contentL" v-for="(con,lIndex1) in limitInfo" :key="lIndex1" :con="con">
      <div class="bannerL">
        <img :src="con.banner">
      </div>

      <!--严选限时购-->
      <div class="three">
        <div class="scroll_tip">
          <p v-for="(tips,lIndex2) in con.scrollTip" :key="lIndex2" :class="{on:istrue==lIndex2}"  @mouseover="istrue=lIndex2" @click="show(lIndex2)">
            <span>{{tips.date}}</span>
            <span>{{tips.staus}}</span>
          </p>
        </div>
        <div class="detailBox" v-for="(dbs,lIndex3) in con.detailBoxNum" :key="lIndex3" v-show="btn == dbs.flag" :dbs="dbs">
          <wyyx-limit-time :ts="dbs.time"></wyyx-limit-time>

          <div class="proDetail">
            <wyyx-limit-prodetail-pros v-for="(ps,n) in dbs.proDetail" :key="n" :ps="ps"></wyyx-limit-prodetail-pros>
          </div>
        </div>

        <div class="all"><a href="">{{con.all}}</a></div>
      </div>

    </div>
  </div>

</template>

<script>
    import WyyxLimitProdetailPros from "../components/limitTime/wyyxLimitProdetailPros";
    import WyyxLimitTime from "../components/limitTime/wyyxLimitTime";
    import {indexServices0} from "../apis/wyyxServer"
    // import $ from 'jquery';
    import jquery from "../../static/js/jquery-1.11.3.js"
    export default {
      name: "limitTime",
      components: {WyyxLimitTime, WyyxLimitProdetailPros},
      data() {
        return {
          istrue:2,
          btn:2,
          limitInfo: []
        }
      },
      methods:{
        result() {
          indexServices0.indexInfoByUserId0((data) => {
            this.limitInfo = data;
            console.log(this.limitInfo)
          })
        },
        show(id){
          this.btn = id
        }
      },
      created() {
        this.result();
        $(function () {
          let oTop = $(".scroll_tip").offset().top - $(".scroll_tip")[0].offsetHeight;
          let sTop = 0;
          $(".limitTime").scroll(function(){
            // console.log(oTop)
            // console.log(sTop)
            sTop = $(this).scrollTop();
            if(sTop >= oTop){
              $(".scroll_tip").css({"position":"fixed","top":"0.85rem"});
            }else{
              $(".scroll_tip").css({"position":"absolute","top":"-0.5rem"});
            }
          });
        })
      }
    }
</script>

<style>
  /*公共样式*/
  .limitTime{
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    background: #f4f4f4;
    color: #333333;
    font-size: .12rem;
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .limitTime img{
    display: block;
    border: none;
    width: 100%;
  }

  /*轮播图*/
  .limitTime .bannerL{
    width: 100%;
    height: 2.0rem;
  }
  .limitTime .three{
    position: relative;
  }
  .limitTime .scroll_tip{
    width: 100%;
    position: absolute;
    left: 0;
    top:-0.7rem;
    display: -webkit-flex;
    overflow-x: scroll;
    z-index: 99;
  }
  .limitTime .scroll_tip::-webkit-scrollbar {
    width: 0 !important;
  }
  .limitTime .scroll_tip p{
    width: 0.96rem;
    background: #f7e0c1 url("../assets/img/img3/line2.png") no-repeat right 0.1rem;
    background-size: 0.01rem 0.47rem;
    padding: 0.05rem 0;
    flex-shrink: 0;
  }
  .limitTime .scroll_tip p:last-child{
    background-image: none;
  }
  .limitTime .scroll_tip .on{
    background: #f49018;
  }
  .limitTime .scroll_tip .on span{
    color: #ffffff;
  }
  .limitTime .scroll_tip .on span:last-child{
    color: #ffffff;
  }
  .limitTime .scroll_tip p span{
    display: block;
    line-height: 0.2rem;
    white-space: nowrap;
    text-align: center;
  }
  .limitTime .scroll_tip p span:first-child{
    font-size: 0.16rem;
  }
  .limitTime .scroll_tip p span:last-child{
    font-size: 0.14rem;
    color: #989898;
  }

  .limitTime  .detailBox{
    margin-top: 0.7rem;
  }

  .limitTime .all{
    margin:0.14rem;
  }
  .limitTime  .all a{
    display: block;
    background: #ffffff;
    height: 0.47rem;
    line-height: 0.47rem;
    text-align: center;
    border: 2px solid #848484;
    border-radius:4px;
    color: #1c1c1c;
    font-size: 0.13rem;
    letter-spacing: 1px;
  }
</style>
