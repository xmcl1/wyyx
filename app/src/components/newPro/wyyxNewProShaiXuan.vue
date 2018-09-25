<template>
  <div class="shuaixuan">
    <div class="wrapper">
      <div class="price">
        <p>{{sx.price}}</p>
        <p>
          <input type="text" placeholder="最低价">
          <span>一</span>
          <input type="text" placeholder="最高价">
        </p>
      </div>

      <div class="sort">
        <div class="two">
          <span>{{sx.spans.sort}}</span>
          <span>{{sx.all}}</span>
        </div>
        <div class="sortBox">
          <a href="javascript:;" v-for="(sa,sid) in sx.sortA" :key="sid" :class="{link:istrue1==sid}" @mouseover="istrue1=sid"><i>{{sa.a}}</i></a>
        </div>
      </div>

      <div class=" sort manufacture">
        <div class="two">
          <span>{{sx.spans.manufacture}}</span>
          <span>{{sx.all}}</span>
        </div>
        <div class="manufactureBox">
          <a href="javascript:;" v-for="(ma,mid) in sx.manufactureA" :key="mid" :class="{link1:istrue2==mid}" @mouseover="istrue2=mid"><i>{{ma.a}}</i></a>
        </div>
      </div>

      <div class="sort">
        <div class="two">
          <span style="background: none; color: #464646;">{{sx.spans.addr}}</span>
        </div>
        <div class="sortBox">
          <a href="javascript:;" :class="{link:istrue3==0}" @mouseover="istrue3=0"><i>{{sx.spans.xian}}</i></a>
        </div>
      </div>

      <div class="wrapper_footer">
        <a href="javascript:;" >{{sx.as.a1}}</a>
        <a href="javascript:;" class="confirm" @click="sShow" @mouseover="back()">{{sx.as.a2}}</a>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "wyyxNewProShaiXuan",
        props:["sx"],
        data(){
            return{
              istrue1:null,
              istrue2:null,
              istrue3:0,
              count:0
            }
        },
        methods:{
          sShow(){
            document.getElementsByClassName("confirm")[0].parentNode.parentNode.parentNode.style.display= "none"
          },
          back(){
            this.$emit("backLayout")
          }
        }
    }
</script>

<style scoped>
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
    background: url("../../assets/img/img3/bot.png") no-repeat right center;
    background-size: 0.1rem 0.08rem;
  }
  .sortBox,.manufactureBox{
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
    height: 0.28rem;
    line-height: 0.28rem;
    text-align: center;
    color: #464646;
    font-size: 0.15rem;
    border: 1px solid #cecece;
    border-radius:4px;
  }
  .manufactureBox .link1 i{
    font-style: normal;
    padding-left: 0.12rem;
    background: url("../../assets/img/img3/sx_dui.png") no-repeat left center;
    background-size: 0.1rem 0.1rem;
  }
  .sortBox i,.manufactureBox i{
    font-style: normal;
    padding-left: 0.12rem;
  }
  .manufactureBox .link1{
    color: #7b2f32;
    border: 1px solid #7b2f32;
  }
  .sortBox .link{
    color: #7b2f32;
    border: 1px solid #7b2f32;
  }
  .sortBox .link i{
    font-style: normal;
    padding-left: 0.12rem;
    background: url("../../assets/img/img3/sx_dui.png") no-repeat left center;
    background-size: 0.1rem 0.1rem;
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
